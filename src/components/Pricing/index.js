import React from 'react';
import Carousel from 'nuka-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


class Pricing extends React.Component {
  render() {
    return (
      <Carousel renderCenterLeftControls={({ previousSlide }) => (
        <FontAwesomeIcon icon={faChevronLeft} onClick={previousSlide}/>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide}/>
      )}
      >
        <p>bhsdughkd</p>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    );
  }
}
export default Pricing