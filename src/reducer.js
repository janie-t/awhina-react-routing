const clone = require('clone')
const _ = require('lodash')


module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'UPDATE_DATA':

      newState.topics = action.payload.data

      newState.activeTopics = action.payload.data

      newState.randomTopic = _.shuffle(action.payload.data)[0] 

      return newState


    default:
      return newState
  }
}
