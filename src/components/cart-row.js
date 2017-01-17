const React = require('react')

module.exports = function (props) {
  const { name, quantity, subtotal, id, store } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{subtotal}</td>
      <td>
        <button 
          onClick={() => store.dispatch(removeFromCart(id))} 
          type="button" 
          name="remove">remove</button>
      </td>
    </tr>
  )
}

function removeFromCart (productId) {
  return {type: 'REMOVE_FROM_CART', payload: productId} 
}
