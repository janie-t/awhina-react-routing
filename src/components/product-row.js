const React = require('react')
import RaisedButton from 'material-ui/RaisedButton';

module.exports = function (props) {
  const { name, price, stock, id, store } = props

  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>{stock}</td>
      <td>
        <RaisedButton
          backgroundColor='#E91E63'
          onClick={() => store.dispatch(addToCart(id))} 
          name="add">
            add
        </RaisedButton>
      </td>
    </tr>
  )
}

function addToCart (productId) {
  return {type: 'ADD_TO_CART', payload: productId} 
}
