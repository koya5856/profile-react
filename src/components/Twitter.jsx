import React from "react";
import { makeStyles } from "@material-ui/core/styles";

let isLoadwidgets = false;

const useStyles = makeStyles({
  base: {
    height: 600,
    backgroundColor: "rgb(238, 233, 232)",
  },
  option: {
    maxWidth: 1140,
    display: "flex",

    width: "90 %",
    margin: "0 auto",
    maxWidth: 1090,
  },
  Card: {
    marginRight: "20px",
  },
});

const Twitter = () => {
  React.useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement("script");
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.base}>
      <p className="font-lg" style={{ paddingLeft: 163 }}>
        Follow me
      </p>
      <div className="module-spacer--medium"></div>
      <div className={classes.option}>
        <div className={classes.Card}>
          <a
            className="twitter-timeline"
            href="https://twitter.com/matsumura58561?ref_src=twsrc%5Etfw"
          >
            Tweets by matsumura58561
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>

        {/* ここをclassNameにするとエラーは消えます。 */}

        <div className={classes.Car}>
          <a
            className="twitter-timeline"
            href="https://twitter.com/matsumura58561?ref_src=twsrc%5Etfw"
          >
            Tweets by matsumura58561
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>
    </div>
  );
};
export default Twitter;
