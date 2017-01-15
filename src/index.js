const debug = require('debug')('index')
const React = require('react')
const ReactDOM = require('react-dom')

const App = require('./components/app')

const Store = require('./store')

const model = {appName: 'Hello'}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe((model) => {
    console.log('model:', model)

    render(store)
  })

  render(store)

  function render (store, model) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App store={store} model={model} />,
      root
    )
  }



  //store.fetchCats()


})
