const debug = require('debug')('components:topics')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

// modules
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Display = (props) => {
  debug({props})
  const { activeTopics } = props

  console.log("topics.js props", props);

  return (
    <div>

      {props.children}

      <h1>motivation - from database</h1>

      <div className="item">

        {randomTopic.map(checkMediaType)}

      </div>

      <div className="source">

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

function checkMediaType(topic){
  if({topic.media_type = "image"}){
    function renderImageTopic(topic){
      return (
        <img src ={topic.content} />
      )
    }
  } else if ({topic.media_type = "video"}){
    function renderVideoTopic(topic){
      return (
        <iframe width="100%" height="300px" src={topic.content} frameborder="0" allowfullscreen></iframe>
      )
    }
  }
}



module.exports = connect((state) => state)(Display)
// Checkout will now have the state and store.dispatch merged into its props
