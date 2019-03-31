import React from "react";
import Slider from "react-slick";

function SampleArrow(props) {
  const { onClick, icon, type, className } = props;
  return (
    <div className={`slick-${type}`} onClick={onClick} >
      <div>
        <button className='button-slider' >
          <i className={`fas ${icon}`} />
        </button>
      </div>
    </div>
  );
}

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleArrow icon='fa-chevron-right' type='next' />,
      prevArrow: <SampleArrow icon='fa-chevron-left' type='prev' />,
    };
    const { ads } = this.props
    return (
      <Slider {...settings} >
        {ads.map(item => (
          <div className='ads ads-premium'>
            <a href='/' >
              <img src={item.image} />
              <p>{item.title}</p>
              <h5>R$ {item.price}</h5>
            </a>
          </div>
        ))}
      </Slider>
    );
  }
}

export default SimpleSlider