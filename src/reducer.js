const clone = require('clone')
const _ = require('lodash')
//const initialState = {
//  products: {
//    1: {
//      id: 1, 
//      name: 'banana', 
//      stock: 2, 
//      price:2, 
//      quantity: 0 
//     } 
//  },
//
//
//  total: 0
//}

module.exports = function (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'ADD_TO_CART':
      const toAdd = state.products[action.payload]

      toAdd.quantity += 1
      toAdd.subtotal += toAdd.price

      newState.products[action.payload] = toAdd
      newState.total += toAdd.price 

      return newState
    case 'REMOVE_FROM_CART':
      const toRemove = state.products[action.payload]

      toRemove.quantity -= 1
      toRemove.subtotal -= toRemove.price

      newState.products[action.payload] = toRemove
      newState.total -= toRemove.price 

    default:
      return newState
  }
}


