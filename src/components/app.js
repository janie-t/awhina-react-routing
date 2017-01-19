const debug = require('debug')('components:app')
const _ = require('lodash')

// modules
const React = require('react')
const { connect } = require('react-redux')
const { AppBar } = require('material-ui')
const store = require('../store')

const App = (props) => {
  debug({props})

  return (
    <div>
      <AppBar title="My Shop" />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
// App will now have the state and store.dispatch merged into its props

