const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')
const { createStore } = require('redux')
const reducer = require('./reducer')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default

// components
const Parent = require('./components/app')

// what!!!!
const App = ({state, store}) => {
  return (
    <MuiThemeProvider>
      <Parent state={state} store={store} />
    </MuiThemeProvider>
  )
}

const initialState = {
  products: {
    1: {
      id: 1, 
      name: 'banana', 
      stock: 2, 
      price:2,
      quantity: 0,
      subtotal: 0, 
    } 
  },

  total: 0
}

const store = createStore(reducer, initialState)

document.addEventListener('DOMContentLoaded', () => {

  store.subscribe(() => {
    const state = store.getState()
    console.log('state', state)
    render(state)
  })

  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App store={store} state={state}/>,
      root
    )
  }

  render(store.getState())
})
