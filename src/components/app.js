const React = require('react')
const Comment = require('./comment')


module.exports = function App (props) {
  console.log('props', props)
  const { store, model} = props
  // var store = props.store
  // var model = props.model
  const author = 'test'

  return (
    <div>
      <h1>{model.appName}</h1>
      <div>{model.description}</div>
      <button onClick={() => store.changeGreeting()}>Change</button> 
      <Comment author={author} text="heya" />
      <Comment author="mix" text="lets demo the multiple component functionality" />
    </div>

  )
}
