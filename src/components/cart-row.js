const React = require('react')
const { RaisedButton } = require('material-ui');

module.exports = function (props) {
  const { name, quantity, subtotal, id, dispatch } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{subtotal}</td>
      <td>
        <RaisedButton
          onClick={() => dispatch(removeFromCart(id))} 
          type="button" 
          name="remove">remove</RaisedButton>
      </td>
    </tr>
  )
}

function removeFromCart (productId) {
  return {type: 'REMOVE_FROM_CART', payload: productId} 
}
