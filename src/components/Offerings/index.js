import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => (
  <div className='btn col-6 col-lg-4'>    
      <img src={props.img}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>       
  </div>
  
)

// Offerings.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       text: PropTypes.string,
//     })
//   ),
// }

export default Card
