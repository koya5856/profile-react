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
  // autoplay: true,

  infinite: true,
  // backgroundColor: " #faf5ea",
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const useStyles = makeStyles(() => ({
  style: {
    // margin: 100,
    height: 515,
    width: "100%",
    accessibility: true,
    paddingLeft: 240,
    // width: 1080,
    // paddingLeft: 82,
    // marginLeft: 344,
  },
  // fontBox: {
  //   paddingLeft: 164,
  // },
}));

const SliderTop = () => {
  const classes = useStyles();

  return (
    <section className="slider-top">
      <div className="module-spacer--small"></div>
      <div className="module-spacer--big"></div>
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
      <div className="slider-top__title">
        KOYA
        <br />
        MATSUMURA
        <div className="font-sm">ここに作成日と軽い説明を書きます</div>
      </div>
      <div className="module-spacer--big"></div>
      {/* <div className={classes.fontBox}>
        <div className="font-lg">Category</div>
        <div className="font-sm">ここに何らかの文字を入れます</div>
      </div>
      <div className="module-spacer--medium"></div>
      <div className="module-spacer--medium"></div> */}
    </section>
  );
};

export default SliderTop;
