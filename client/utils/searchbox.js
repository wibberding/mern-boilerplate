//* Code to filter results view.
//* the search input needs to have the id 'searchbox' and the searchable items need the class 'searchable'.

export const liveSearch = () => {
  // Locate the card elements
  const searchables = document.querySelectorAll('.searchable');
  // Locate the search input
  const searchQuery = document.getElementById('searchbox').value;
  // Loop through the cards
  for (let i = 0; i < searchables.length; i++) {
    // If the text is within the card...
    if (searchables[i].innerText.toLowerCase()
    // ...and the text matches the search query...
      .includes(searchQuery.toLowerCase())) {
      // ...remove the `.is-hidden` class.
      searchables[i].classList.remove('is-hidden');
    } else {
      // Otherwise, add the class.
      searchables[i].classList.add('is-hidden');
    }
  }
};
