var tutorials, visible, visible_counts, hidden, dict, filters = [];

$(function() {
  // Grab all tutorials
  tutorials = $("section.tutorial");

  // Mark all tutorials as visible
  tutorials.show();

  dict = _.chain(tutorials)
    .reduce(function(lookup, tutorial) {
      _($(tutorial).data().facets).each(function(val, key) {
        if(!_(lookup).has(key)) { lookup[key] = {}; }
        if(!_(lookup[key]).has(val)) { lookup[key][val] = []; }
        lookup[key][val].push(tutorial);
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
      console.log("Removing filter: " + existing_filter.name);
      filters = _(filters).without(existing_filter);
    } else {
      console.log("Applying filter: " + target.name);
      filters = _(filters).reject(function(filter) { return filter.name === target.name; });
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
  console.log("Calculating all ...")
  all = _.chain(filters).map(function(filter) {
    return dict[filter.name][filter.value];
  }).flatten().value();

  // Only keep the tutorials that are visible
  console.log("Calculating keep ...")
  keep = _(tutorials).select(function(tutorial) {
    return all.length - _(all).without(tutorial).length === filters.length
  });

  // Make DOM elements visible or not
  $(keep).show();
  $(_(tutorials).difference(keep)).hide();
};

function update_sidebar() {
  visible = _.chain($("section.tutorial:visible"))
    // Collect all the facets
    .map(function(tutorial) { return $(tutorial).data().facets; })
    // and combine all facets into a nested hash
    .reduce(function(counts, facets) {
      // by iterating over each pair and aggregating the counts of each
      _(facets).each(function(val, key) {
        // Initialize the names
        if(!_(counts).has(key)) { counts[key] = {}; }
        // and the values/counts
        if(!_(counts[key]).has(val)) { counts[key][val] = 0; }
        // then increment the counts
        counts[key][val] += 1;
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
