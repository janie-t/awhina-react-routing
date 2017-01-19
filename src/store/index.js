const { createStore } = require('redux')
const reducer = require('../reducer')
const initialState = require('../../state')

module.exports = createStore(reducer, initialState)
