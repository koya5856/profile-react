import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import test1 from "../images/image1.jpg";
import test2 from "../images/image2.jpg";
import test3 from "../images/image3.jpg";
import test4 from "../images/image4.jpg";
import test5 from "../images/image5.jpg";
import test6 from "../images/image6.jpg";
import { Intersection } from "../scripts/vendors/Intersection";

const useStyles = makeStyles(() => ({
  base: {
    height: 633,
    width: "100%",
    backgroundColor: "#d0e5e8",
  },

  instagram__icon: {
    textAlign: "center",
  },
  instagram__item: {
    height: "100%",

    // maxWidth: 1080,
    justifyContent: "spaceBetween",
    // flexDirection: "row",
  },
  style: {
    // flexBasis: "33%",
    height: 250,
    width: 250,
    marginLeft: 20,
    marginRight: 20,
  },
  box1: {
    display: "flex",
    width: 807,
    textAlign: "center",
    margin: "0 auto",
  },
  box2: {
    display: "flex",
    width: 807,
    textAlign: "center",
    margin: "0 auto",
  },
}));
const Instagram = () => {
  const classes = useStyles();
  return (
    <section className={classes.base}>
      <div className="module-spacer--small"></div>
      <Intersection>
        <div id="test">
          <div className={classes.instagram__icon}>
            <a
              className={classes.instagram__icon}
              href="https://www.instagram.com/kouyadofu5856/?hl=ja"
            >
              <img src="https://img.icons8.com/metro/52/000000/instagram-new.png" />
            </a>
          </div>
          <div className="module-spacer--small"></div>
          <div className={classes.instagram}>
            <div className={classes.instagram__item}>
              <div className={classes.box1}>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test1} alt="" />
                </div>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test2} alt="" />
                </div>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test3} alt="" />
                </div>
              </div>
              <div className="module-spacer--small"></div>
              <div className={classes.box2}>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test4} alt="" />
                </div>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test5} alt="" />
                </div>
                <div className={classes.imgBox}>
                  <img className={classes.style} src={test6} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Intersection>
      <div className="module-spacer--small"></div>
    </section>
  );
};

export default Instagram;
