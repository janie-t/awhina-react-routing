const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'UPDATE_DATA':
      return newState

    default:
      return newState
  }
}
