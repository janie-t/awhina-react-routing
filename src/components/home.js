const debug = require('debug')('components:shop')
const React = require('react')
const _ = require('lodash')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { RaisedButton } = require('material-ui')

//components

module.exports = connect((state) => state)(Shop)

function Shop (props) {
  debug({props})

  return (
    <div className="shop">
    <div className="choose">
      <h1>āwhina</h1>
      <h3>Haere mai ki āwhina | Welcome to āwhina.</h3>
      <h4>This is a resource for anyone who needs a bit of support or help.</h4>
      <p>He aha tō hiahia i tenei wā? | What do you need today?</p>
    </div>

    <Link to="/display" >
      <RaisedButton name="motivation" id="topic" backgroundColor="#adbce6" className="raisedButton">
        Motivation
      </RaisedButton>
    </Link>

    <RaisedButton className="raisedButton" backgroundColor="pink">
      Helpful links
    </RaisedButton>

    </div>
  )
}
