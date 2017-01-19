const debug = require('debug')('components:checkout')
const _ = require('lodash')

// modules
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
  debug({props})

  return (
    <div>
      <Link to="/"> Go Back </Link>
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
// App will now have the state and store.dispatch merged into its props

