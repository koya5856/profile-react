import React, { useRef, useEffect } from "react";
import "./styles/reset.css";
import "./styles/styles.css";
import {
  Header,
  // Background,
  Introduction,
  SlideBar,
  SliderTop,
  Instagram,
  Twitter,
} from "./components/index";

import { Up, Intersection } from "./scripts/index";

function App() {
  const ref = useRef(null);
  return (
    <div className="">
      <div className="">
        <Header />

        <div className="">
          {/* <Background /> */}

          {/* <Up> */}
          <SliderTop />
          {/* </Up> */}

          <Introduction />

          <div id="BackScroll__3">
            <SlideBar />
          </div>
          <div id="BackScroll__4" ref={ref}>
            <Instagram />
          </div>
          <div id="BackScroll__5">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
