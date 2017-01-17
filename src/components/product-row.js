const React = require('react')

module.exports = function (props) {
  const { name, price, stock, store, id } = props

  return (
    <tr>
      <td>{name}</td>
      <td>$ {price}</td>
      <td>{stock}</td>
      <td>
        <button 
          onClick={() => store.dispatch(addToCart(id))} 
          name="add">
            add
        </button>
      </td>
    </tr>
  )
}

function addToCart (productId) {
  return {type: 'ADD_TO_CART', payload: productId} 
}
