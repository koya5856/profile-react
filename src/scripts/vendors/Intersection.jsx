import React, { useRef, useEffect, useState } from "react";
import App from "../../App";

export const Intersection = ({ children }) => {
  // childrenから子要素を参照する

  // コンポーネントがマウントした後、渡した関数を実行する
  useEffect(() => {
    const child = document.querySelector("#test");
    console.log(child);

    // debugger; /* -- 一応コメントアウトしておきます -- */

    if (child) {
      /* ここにIntersectionObserverなどの処理 */

      const cb = function (entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inview");
            // observer.unobserve(entry.target);
            alert("inview"); //機能しません
          } else {
            entry.target.classList.remove("inview");
          }
          const options = {
            root: null,
            rootMargin: "-300px 0px",
            threshold: [0, 0.5, 1],
          };
          const io = new IntersectionObserver(cb, options);
          console.log(io); //ioが取れていない

          io.observe(child);
        });
      };
    }
  }, []); // 第二引数に空配列を渡す！

  return <div>{children /* childrenを使うように修正 */}</div>;
};

export default Intersection;
