'use strict'

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + 'books',
    method: 'GET'
  })
}
