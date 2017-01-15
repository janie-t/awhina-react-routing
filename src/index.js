const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')

// components
const App = require('./components/app')

const Store = require('./store')

const model = {
  appName: 'My plain JS app',
  description: 'just a demo app',
  items: {
    1: {id: 1, name: 'banana', stock: 2, price:2} 
  },

  cart:  {

  },

  total: 0

}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe((m) => {
    console.log('model:', m)

    render(store, m)
  })

  render(store, model)


  function render (store, model) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App store={store} model={model} name="mix page" />,
      root
    )
  }



  //store.fetchCats()


})
