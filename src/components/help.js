const debug = require('debug')('components:display')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')

// modules
const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Help = (props) => {
  debug({props})

  return (
    <div>

      {props.children}
      <h1>āwhina</h1>
      <h3>Helpful resources</h3>
      <div className="item">
      </div>

      <Link to="/"> Go Back </Link>
    </div>
  )
}

module.exports = connect((state) => state)(Help)

// <div class = 'topics'>
//   <p>YOUTHLINE:</br>
//     <a class="link" href="https://www.youthline.co.nz/">Click here for the website</a>
//     <p>Phone free: 0800 376 633</p>
//     <p>Free text: 234</p>
//     <p>Email: talk@youthline.co.nz</p>
//     <p>Chat online: <a class="link" href="https://www.youthline.co.nz/services/goforward/go-chat/">Click here</a></p>
//   </p>
// </div>
//
// <div class = 'topics'>
//   <p>WHATSUP:</p>
//     <p>A counselling phone line for 5 - 18 yrs, with trained counsellors taking the calls.</p>
// <p>Website: <a class="link" href="http://www.whatsup.co.nz/">'http//:www.whatsup.co.nz/'</a></p>
//   <p>Phone: 0800 942 8787 free from any mobile, landline or phone box.</p>
//   </div>
