var tutorials;
var sidebar;
var sidebar_counts;

$(function(){
  // Grab all tutorials
  tutorials = $("section.tutorial");

  // Generate the sidebar
  sidebar = _.chain(tutorials)
    .map(function(tutorial) {
      return $(tutorial).data().facets;
    })
    .reduce(function(counts, facets) {
      _(facets).each(function(val, key) {
        if(!_(counts).has(key)) {
          counts[key] = {};
        }
        if(!_(counts[key]).has(val)) {
          counts[key][val] = 0;
        }
        counts[key][val] += 1;
      });
      return counts;
    }, {})
    .value();

  // Generate counts for the sidebar
  counts = {};
  _(sidebar).each(function(val, key) {
    counts[key] = _(val).keys().length;
  });
  sidebar_counts = counts;

  // Draw the sidebar
  redraw();
});

function redraw() {
  template = "<% _(sidebar).each(function(val, key) { %><h3><%= key %> (<%= sidebar_counts[key] %>)</h3><ul><% _(val).each(function(v, k) { %><li><%= k %> (<%= v %>)</li><% }) %></ul><% }) %>";
  list = _.template(template);
  $("#sidebar").append(list);
};
