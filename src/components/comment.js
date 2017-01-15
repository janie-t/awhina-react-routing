const debug = require('debug')('components:comment')
const React = require('react')

module.exports = function (props) {
  const { author, text } = props

  return (
    <div>
      <span>{author}: </span>
      <span>{text}</span>
    </div>
  )
}
