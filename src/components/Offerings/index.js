import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => (
  <div className="col-6 col-lg-4">     
      <div className='justify-content-center d-flex'>
        <img src={props.img}/>
      </div>
        <div>
          <h1 className='justify-content-center d-flex'>
            {props.title}
            </h1>
        </div>

      <div className='justify-content-center d-flex'>
        <p>
        {props.description}
        </p><
      /div>       
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
