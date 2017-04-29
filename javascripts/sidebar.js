var tutorials;
var visible;
var visible_counts;
var hidden;
var dict;
var filters = [];

$(() => {
  // Grab all tutorials
  tutorials = $("div.tutorial");

  // Mark all tutorials as visible
  tutorials.show();

  // Render license/source information
  _(tutorials).each(tutorial => {
    t = $(tutorial);
    d = t.data();
    var meta = d.authorGithub || d.author || d.source || d.license;
    if(meta) {
      var attribution = "";
      if(d.authorGithub) {
        attribution += '<span>by <a href="http://github.com/' + d.authorGithub + '">' + d.authorGithub + '</a></span>';
      } else if(d.author) {
        attribution += "<span>by " + d.author + "</span>"
      }
      if(d.source) {
        if (d.authorGithub || d.author) {
          attribution += '<span>|</span>';
        }
        attribution += '<span><a href="' + d.source + '">Original Source</a></span>';
      }
      if(d.license) {
        if (d.authorGithub || d.author || d.source) {
          attribution += '<span>|</span>';
        }
        attribution += '<span><a href="' + d.license + '">License</a></span>';
      }
      t.prepend("<p class='about'>" + attribution + "</p>");
    }
  });

  dict = _.chain(tutorials)
    .reduce((lookup, tutorial) => {
      _($(tutorial).data().facets).each((val, key) => {
        if(!_(lookup).has(key)) { lookup[key] = {}; }
        // We want to be able to have multiple values for vertain
        // facets, so we convert strings to arrays and iterate over each
        if(_(val).isString()) { val = [val]; }
        _(val).each(v => {
          if(!_(lookup[key]).has(v)) { lookup[key][v] = []; }
          lookup[key][v].push(tutorial);
        });
      });
      return lookup;
    }, {})
    .value();

  // Draw the sidebar
  redraw();

  //Fix sidebar
  function sidebar_fix() {
    var header_height = $('header').height();

    var //fixed
    footer_height = 150;

    var window_height = $(window).height();
    var $nav_sidebar  = $('nav#sidebar');
    var sidebar_height= $nav_sidebar.height();
    var difference = window_height - (header_height + footer_height);

    if ($(window).width()>970){
      var existence = sidebar_height+difference;
      $('header h1').css('paddingTop', 0);
      if (existence>250) {
        $nav_sidebar.height(existence);
        if ($('header').width()==250) {
          $('header').css('position', 'fixed');
          $('footer').css('position', 'fixed');
        }
      }
    } else {
      $nav_sidebar.css('height', 'auto');
      $('header').css('position', 'static');
      $('footer').css('position', 'static');
      $('header h1').css('paddingTop', $('section#main h1').height());
    }
  }
  sidebar_fix();
  $(window).resize(() => { sidebar_fix() });

  // title fix
  var $section = $('section#main');

  var $title = $section.find('h1');
  var title_height = $title.height();
  var set_padding = title_height + 20;
  $section.css('paddingTop',set_padding);

  // Hide tutorials if the user clicks on a facet
  $("nav li").live("click", function(e) {
    target = $(this).data();
    existing_filter = _(filters).find(filter => filter.name === target.name && filter.value === target.value);
    if(existing_filter) {
      _gaq.push(['_trackEvent', 'filters - remove', existing_filter.name, existing_filter.value, filters.size]);
      filters = _(filters).without(existing_filter);
    } else {
      _gaq.push(['_trackEvent', 'filters - apply', target.name, target.value, filters.size]);
      filters = _(filters).reject(filter => filter.name === target.name && filter.value === target.value);
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
}

function update_visibility() {
  // Grab all the tutorials for each facet into an array
  all = _.chain(filters).map(filter => dict[filter.name][filter.value]).flatten().value();

  // Only keep the tutorials that are visible
  keep = _(tutorials).select(tutorial => all.length - _(all).without(tutorial).length === filters.length);

  // Make DOM elements visible or not
  $(keep).show();
  $(_(tutorials).difference(keep)).hide();
}

function update_sidebar() {
  visible = _.chain($("div.tutorial:visible"))
    // Collect all the facets
    .map(tutorial => $(tutorial).data().facets)
    // and combine all facets into a nested hash
    .reduce((counts, facets) => {
      // by iterating over each pair and aggregating the counts of each
      _(facets).each((val, key) => {
        // Initialize the names
        if(!_(counts).has(key)) { counts[key] = {}; }
        // and the values/counts
        if(_(val).isString()) { val = [val]; }
        _(val).each(v => {
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
  _(visible).each((val, key) => {
    counts[key] = _(val).keys().length;
  });
  visible_counts = counts;
}
