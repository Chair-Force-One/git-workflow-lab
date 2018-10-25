'use strict'

const showBooksTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  $('#message').html(showBooksHtml)
}

const clearBooks = () => {
  $('#message').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getBooksSuccess,
  clearBooks,
  failure
}
