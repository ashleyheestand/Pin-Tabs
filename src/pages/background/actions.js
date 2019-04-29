//BOOKMARKS ACTIONS
export const refreshBookmark = (data, time) => ({
  type: 'REFRESH',
  urlList: data,
  y: time,
});

export const deleteAllBookmark = () => ({
  type: 'DELETE-ALL',
});

export const deleteOneBookmark = url => ({
  type: 'DELETE-ONE',
  url: url,
});

export const addBookmark = url => ({
  type: 'ADD',
  urlList: url,
  y: new Date().getTime(),
});

export const addFromButton = flag => ({
  type: 'DELETE-ONE',
  addFromButton: flag,
});

export const searchBookmark = text => ({
  type: 'SEARCH',
  textSearched: text,
});

export const emptySearch = () => ({
  type: 'EMPTY-SEARCH',
});

export const addCategory = category => ({
  type: 'ADD-CATEGORY',
  categories: category,
});

//SETTINGS actions

export const toggleButton = flag => ({
  type: 'TOGGLE-BUTTON',
  toggleButton: flag,
});

// export const eDate = (date) => ({
//   type: 'UPDATE-DATE',
//   eDate: date
// })

// export const toggleButtonHistory = (flag) => ({
//   type: 'TOGGLE-BUTTON-HISTORY',
//   toggleButtonHistory: flag
// })

// ANIMATION ACTIONS

export const buttonCog = flag => ({
  type: 'TOGGLE-COG',
  buttonCog: flag,
});

export const toggleSearch = classValue => ({
  type: 'TOGGLE-SEARCH',
  toggleSearch: classValue,
});

//CATEGORIES ACTIONS

// export const add
