import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => (
  <div className="col-6 col-lg-3 cards mr-2 mb-2">     
      <div className='justify-content-center d-flex'>
        <img src={props.img}/>
      </div>
        <div className='justify-content-center d-flex'>
          <h1 className='text-align-center'>
            {props.title}
            </h1>
        </div>

      <div className='justify-content-center d-flex'>
        <p className='text-align-center'>
        {props.description}
        </p></div>       
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
