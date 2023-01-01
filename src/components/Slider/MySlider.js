import './slick.css'
import './slick-theme.css'
import Slider from "react-slick";

import styled from 'styled-components';
import LogoSrc from '../../assets/1.png';
import LogoSrc2 from '../../assets/3.png';
import LogoSrc3 from '../../assets/5.png';

function MySlider() {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    }

    return (
      <div>
        <Slider {...settings}>
          <div>
            <MyImage src={LogoSrc} alt="test1" />
          </div>
          <div>
            <MyImage src={LogoSrc2} alt="test1" />
          </div>
          <div>
            <MyImage src={LogoSrc3} alt="test1" />
          </div>
        </Slider>
      </div>
    );
 
}
export default MySlider;

const MyImage = styled.img`
    width: 100vw;
    height: 50vh;
`;