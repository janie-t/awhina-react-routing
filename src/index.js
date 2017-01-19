// logging
const debug = require('debug')('index')
localStorage.debug = '*'

// modules
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const { MuiThemeProvider } = require('material-ui/styles')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./components/app')
const Shop = require('./components/shop')
const Checkout = require('./components/checkout')

const store = createStore(reducer, initialState)


// routes nested inside parent routes
// "/"
//  child ->  "/checkout"
//  IndexRoute is the default child for that parent
//
// <Provider will re-render the app when the state is updated
// we can now connect to the state and dispatch directly with connect()
// see components/app.js and components/checkout.js


// destructuring in the arguments!!!!
const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <IndexRoute component={Shop} />
            <Route path="checkout" component={Checkout} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
    function render (store) {
      ReactDOM.render(
        <Root store={store}/>,
        root
      )
    }

    store.subscribe(() => {
      render(store)
    })

    render(store)

})
