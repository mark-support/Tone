var searchBar = $('.header-search');
var searchInput = $('#search-form');
var body = $('body');

searchBar.on('click', function (event) {
  searchBar.addClass('expanded');
  searchInput.focus();
  event.stopPropagation();
})

body.on('click', function (event) {
  if (event.target !== searchBar) {
    searchBar.removeClass('expanded');
    searchInput.val('');
    searchInput.blur();
  }
})
