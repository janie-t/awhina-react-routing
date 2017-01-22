const debug = require('debug')('components:display')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

// modules
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Display = (props) => {
  debug({props})

  return (
    <div>

      {props.children}
      <h1>motivation - from database</h1>
      <div className="item">
        Random Media File from database
      </div>
      <div className="source">
        Author or source from database
      </div>
      <RaisedButton className="raisedButton" backgroundColor="pink">
        Another one
      </RaisedButton>
      <div id="mediaChoice">
        <p>Select the type of media</p>
        <input type="checkbox" name="choose" value="text" defaultChecked/>Text
        <input type="checkbox" name="choose" value="image" defaultChecked/>Image
        <input type="checkbox" name="choose" value="video" defaultChecked/>Video
      </div>

      <Link to="/"> Go Back </Link>
    </div>
  )
}

module.exports = connect((state) => state)(Display)
// Checkout will now have the state and store.dispatch merged into its props
