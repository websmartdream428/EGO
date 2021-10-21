import React from "react";
import Slider from "react-slick";
import { SliderBarDiv, SliderImgDiv } from "./StyledHome";
import IMG from "../../../assets/Images/img/slider.jpg";

const SliderBar = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const SliderImg = () => {
    return <SliderImgDiv src={IMG.src} alt="slider" />;
  };
  return (
    <SliderBarDiv>
      <Slider {...settings}>
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
        <SliderImg />
      </Slider>
    </SliderBarDiv>
  );
};

export default SliderBar;
