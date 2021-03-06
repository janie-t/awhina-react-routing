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
const request = require('superagent')

const reducer = require('./reducer')
const initialState = require('../state')

// top level components
const App = require('./components/app')
const Home = require('./components/home')
const Topics = require('./components/topics')
const Help = require('./components/help')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store} >
        <Router history={hashHistory} >
          <Route path="/" component={App} store={store}>
            <IndexRoute component={Home} />
            <Route path="topics" component={Topics} />
            <Route path="help" component={Help} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
    ReactDOM.render(
      <Root store={store}/>,
      root
    )
    request.get('/api/v1/topics').end(function(err,res){
      console.log("index.js resbody", res.body);
      store.dispatch({type: 'UPDATE_DATA', payload: res.body})
    })



})
