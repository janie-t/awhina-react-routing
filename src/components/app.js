const React = require('react')
const Comment = require('./comment')

module.exports = function (props) {
  const { store, model } = props

  return (
    <div>
      <h1>{model.appName}</h1>
      <Comment author="me" />
      <button onClick={() => store.changeGreeting()}>Change</button> 
    </div>

  )
}
