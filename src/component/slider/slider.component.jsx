import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import { useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
const ReactSlider = ({ children }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
  };
  return (
    <Box className="max-w--6xl">
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
        className="relative">
        {children}
      </Slider>
      <Box className="flex justify-evenly items-center mt-5">
        <IconButton onClick={previous}>
          <ArrowBackIcon className="!text-[--color-primary]" />
        </IconButton>
        <IconButton className="button" onClick={next}>
          <ArrowForwardIcon className="!text-[--color-primary]" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default ReactSlider;
