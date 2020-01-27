import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import PropTypes from 'prop-types'

const TeamMember = (props) => {
  
  return(
    <Link to="/blog">
      <div className="col-6 col-lg-3 teamMembers mr-2 mb-2">     
      <div className='justify-content-center d-flex'>
        <img src={props.img}/>
      </div>
        <div className='justify-content-center d-flex'>
          <h1 className='text-align-center'>
            {props.name}
            </h1>
        </div>

      <div className='justify-content-center d-flex'>
        <p className='text-align-center'>
        {props.title}
        </p></div>       
    </div>    
    </Link>
  )
}

// Testimonials.propTypes = {
//   testimonials: PropTypes.arrayOf(
//     PropTypes.shape({
//       quote: PropTypes.string,
//       author: PropTypes.string,
//     })
//   ),
// }

export default TeamMember
