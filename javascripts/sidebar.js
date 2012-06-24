var tutorials, visible, visible_counts, hidden, dict, filters = [];

$(function() {
  // Grab all tutorials
  tutorials = $("div.tutorial");

  // Mark all tutorials as visible
  tutorials.show();

  // Render license/source information
  _(tutorials).each(function(tutorial){
    t = $(tutorial)
    d = t.data()
    attribution = ""
    if(d.authorGithub) {
      attribution += '<li>Author: <a href="http://github.com/' + d.authorGithub + '">' + d.authorGithub + '</a></li>'
    } else if(d.author) {
      attribution += "<li>Author: " + d.author + "</li>"
    }
    if(d.source) {
      attribution += '<li><a href="' + d.source + '">Original Source</a></li>'
    }
    if(d.license) {
      attribution += '<li><a href="' + d.license + '">License</a></li>'
    }
    if(attribution) { t.prepend("<ul>" + attribution + "</ul>")}
  });

  dict = _.chain(tutorials)
    .reduce(function(lookup, tutorial) {
      _($(tutorial).data().facets).each(function(val, key) {
        if(!_(lookup).has(key)) { lookup[key] = {}; }
        // We want to be able to have multiple values for vertain
        // facets, so we convert strings to arrays and iterate over each
        if(_(val).isString()) { val = [val]; }
        _(val).each(function(v) {
          if(!_(lookup[key]).has(v)) { lookup[key][v] = []; }
          lookup[key][v].push(tutorial);
        });
      });
      return lookup;
    }, {})
    .value();

  // Draw the sidebar
  redraw();

  // Hide tutorials if the user clicks on a facet
  $("nav li").live("click", function(e) {
    target = $(this).data();
    existing_filter = _(filters).find(function(filter) {
      return filter.name === target.name && filter.value === target.value;
    });
    if(existing_filter) {
      _gaq.push(['_trackEvent', 'filters', 'remove', existing_filter.name, filters.size]);
      filters = _(filters).without(existing_filter);
    } else {
      _gaq.push(['_trackEvent', 'filters', 'apply', target.name, filters.size]);
      filters = _(filters).reject(function(filter) { return filter.name === target.name && filter.value === target.value; });
      filters.push(target);
    }
    redraw();
  });
});

function redraw() {
  update_visibility();
  update_sidebar();
  var template = $("#sidebar_template").text();
  var list = _.template(template);
  $("#sidebar").html(list);
};

function update_visibility() {
  // Grab all the tutorials for each facet into an array
  all = _.chain(filters).map(function(filter) {
    return dict[filter.name][filter.value];
  }).flatten().value();

  // Only keep the tutorials that are visible
  keep = _(tutorials).select(function(tutorial) {
    return all.length - _(all).without(tutorial).length === filters.length
  });

  // Make DOM elements visible or not
  $(keep).show();
  $(_(tutorials).difference(keep)).hide();
};

function update_sidebar() {
  visible = _.chain($("div.tutorial:visible"))
    // Collect all the facets
    .map(function(tutorial) { return $(tutorial).data().facets; })
    // and combine all facets into a nested hash
    .reduce(function(counts, facets) {
      // by iterating over each pair and aggregating the counts of each
      _(facets).each(function(val, key) {
        // Initialize the names
        if(!_(counts).has(key)) { counts[key] = {}; }
        // and the values/counts
        if(_(val).isString()) { val = [val]; }
        _(val).each(function(v) {
          if(!_(counts[key]).has(v)) { counts[key][v] = 0; }
          // then increment the counts
          counts[key][v] += 1;
        });
      });
      return counts;
    // This is where we're storing the new data
    }, {})
    // Get the final counts
    .value();

  // Generate counts for the sidebar
  var counts = {};
  _(visible).each(function(val, key) {
    counts[key] = _(val).keys().length;
  });
  visible_counts = counts;
};
