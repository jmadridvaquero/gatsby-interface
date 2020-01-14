import React from 'react'
import PropTypes from 'prop-types'

const TeamMember = (props) => (
  <div className="col-6 col-lg-3 cards mr-2 mb-2">     
  <div className='justify-content-center d-flex'>
    <img src={props.img}/>
  </div>
    <div className='justify-content-center d-flex'>
      <h1 className='text-align-center'>
        {props.name}
        </h1>
    </div>

  <div> className='justify-content-center d-flex'>
    <p className='text-align-center'>
    {props.title}
    </p></div>       
</div>
)

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
// }

export default TeamMember
