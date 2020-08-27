// import "intersection-observer"; // optional polyfill
// import Observer from "@researchgate/react-intersection-observer";
// import React, { useRef, useEffect, useState } from "react";
// import App from "../../App";

// const Intersecting = () => {
//   // const [entry, updateEntry] = useState();
//   useEffect(() => {
//     const child = document.querySelector(".makeStyles-base-18");
//     console.log(child);
//   }, []);

//   const ScrollOfServer = (child) => {
//     const cb = function (entries, observer) {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("inview");
//           // observer.unobserve(entry.target);
//         } else {
//           entry.target.classList.remove("inview");
//         }
//         const options = {
//           root: null,
//           rootMargin: "-300px 0px",
//           threshold: [0, 0.5, 1],
//         };
//         const io = new IntersectionObserver(cb, options);
//         io.observe(child);
//       });
//     };
//     return (
//       <div className="">
//         <isIntersecting />
//         <App />
//       </div>
//     );
//   };
// };

// export default Intersecting;

import React from "react";
import styled from "styled-components";
import InViewMonitor from "react-inview-monitor";

const Up = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp isActive={false} delay={delay}>
      {children}
    </FadeInUp>
  </InViewMonitor>
);
export default Up;

export const Down = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDown isActive={false} delay={delay}>
      {children}
    </FadeInDown>
  </InViewMonitor>
);

export const Left = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeft isActive={false} delay={delay}>
      {children}
    </FadeInLeft>
  </InViewMonitor>
);

export const Right = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInRight isActive={false} delay={delay}>
      {children}
    </FadeInRight>
  </InViewMonitor>
);

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 1s ease, transform 2.5s ease;
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: 1s;`}
`;

const FadeInUp = styled(FadeIn)`
  transform: translateY(45px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInDown = styled(FadeIn)`
  transform: translateY(-30px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInLeft = styled(FadeIn)`
  transform: translateX(-30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInRight = styled(FadeIn)`
  transform: translateX(30px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;
