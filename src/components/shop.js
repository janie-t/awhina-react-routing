const debug = require('debug')('components:shop')
const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { RaisedButton } = require('material-ui')

//components
const ProductRow = require('./product-row')
const CartRow = require('./cart-row')

module.exports = connect((state) => state)(Shop)

function Shop (props) {
  debug({props})
  const { products, total, dispatch} = props

  const productsInCart = _.filter(products, (product) => product.quantity)

  return (
    <div className="shop">
      <h1>SHOP</h1>
        <table>
          <thead>
            <tr>
              <th>ITEMS</th>
              <th>PRICE</th>
              <th>stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { 
              _.map(products, (product) => {
                // investigate the spread operator in jsx
                return <ProductRow {...product} dispatch={dispatch} />
              }) 
            }
          </tbody>
        </table>

      <h2>CART</h2>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { 
              _.map(productsInCart, (product) => (
                <CartRow {...product} dispatch={dispatch} />
              ))
            }
          </tbody>
        </table>
        <p>Total : $ {total}</p>
        <Link to="/checkout" >
          <RaisedButton name="checkout" id="checkout">
            Checkout
          </RaisedButton>
        </Link>
    </div>
  )
}
