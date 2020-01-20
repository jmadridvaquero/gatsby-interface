import React from 'react';
import Carousel from 'nuka-carousel';

class Pricing extends React.Component {
  render() {
    return (
      <Carousel renderCenterLeftControls={({ previousSlide }) => (
        <p onClick={previousSlide}>Previous</p>
      )}>
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