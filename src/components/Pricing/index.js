import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class Pricing extends React.Component {
  render() {
    return (
      <div>
        <Carousel renderCenterLeftControls={({ previousSlide }) => (
          <FontAwesomeIcon icon={faChevronLeft} onClick={previousSlide}/>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide}/>
        )}
        >
        
          <p>Hot Docs commissioned Co-op Interface to conduct the festival’s first economic impact assessment. We worked easily and collaboratively with [them and were].. very pleased with Co-op Interface’s professionalism, attention to detail, and ultimately the results of the study.</p>
          <p>Hot Docs commissioned Co-op Interface to conduct the festival’s first economic impact assessment. We worked easily and collaboratively with [them and were].. very pleased with Co-op Interface’s professionalism, attention to detail, and ultimately the results of the study.</p>
          <p>Hot Docs commissioned Co-op Interface to conduct the festival’s first economic impact assessment. We worked easily and collaboratively with [them and were].. very pleased with Co-op Interface’s professionalism, attention to detail, and ultimately the results of the study.</p>
          
         
          
        </Carousel>
      </div>
    );
  }
}
export default Pricing