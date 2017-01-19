const debug = require('debug')('components:product-row')
const React = require('react')
const {RaisedButton} = require('material-ui');

module.exports = function (props) {
  const { name, price, stock, id, dispatch } = props

  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>{stock}</td>
      <td>
        <RaisedButton
          backgroundColor='#E91E63'
          onClick={() => dispatch(addToCart(id))} 
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
