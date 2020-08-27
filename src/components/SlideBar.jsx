import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/core/styles";
import test1 from "../images/image1.jpg";
import test2 from "../images/image2.jpg";
import test3 from "../images/image3.jpg";
import test4 from "../images/image4.jpg";
import test5 from "../images/image5.jpg";

const settings = {
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,

  maxHeight: 325,
};

const useStyles = makeStyles(() => ({
  style: {
    height: 325,
    maxHeight: 325,
    height: "100%",
    width: "100%",
    accessibility: true,
  },
  // fontBox: {
  //   paddingLeft: 164,
  // },
}));

const SlideBar = () => {
  const classes = useStyles();

  return (
    <section className="slider-top">
      <Slider {...settings}>
        <div>
          <img className={classes.style} src={test1} alt="" />
        </div>
        <div>
          <img className={classes.style} src={test2} alt="" />
        </div>
        <div>
          <img className={classes.style} src={test3} alt="" />
        </div>
        <div>
          <img className={classes.style} src={test4} alt="" />
        </div>
        <div>
          <img className={classes.style} src={test5} alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default SlideBar;
