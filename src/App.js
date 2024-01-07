//import logo from './logo.svg';
// import './App.css';
import One from './Pages/One/One'
import Two from './Pages/Two/Two';
// import React, { useCallback, useRef } from 'react';

// function scaleGrayColor(from, to, x) {
//   const y = from + (to-from) * x;
//   return "rgb(" + String(y) + ", " + String(y) + ", " + String(y) + ")";
// }

function App() {

  // const fullPageRef = useRef();
  //   const dots = [useRef(), useRef(), useRef(), useRef()];

  //   const onScroll = useCallback(() => {
  //       const scrollHeight = fullPageRef.current.scrollHeight;
  //       const scrollTop = fullPageRef.current.scrollTop;
  //       const p = scrollTop/scrollHeight;

  //       const p1 = Math.min(Math.abs(p - 0), 0.25) / 0.25;
  //       const p2 = Math.min(Math.abs(p - 0.25), 0.25) / 0.25;
  //       const p3 = Math.min(Math.abs(p - 0.5), 0.25) / 0.25;
  //       const p4 = Math.min(Math.abs(p - 0.75), 0.25) / 0.25;
    
  //       const c1 = scaleGrayColor(69, 196, p1);
  //       const c2 = scaleGrayColor(69, 196, p2);
  //       const c3 = scaleGrayColor(69, 196, p3);
  //       const c4 = scaleGrayColor(69, 196, p4);

  //       dots[0].current.style.backgroundColor = c1;
  //       dots[1].current.style.backgroundColor = c2;
  //       dots[2].current.style.backgroundColor = c3;
  //       dots[3].current.style.backgroundColor = c4;

  //   }, [fullPageRef, dots]);

  return (
    <div>
      <One/>
    </div>
    // <div className="pages" ref={fullPageRef} onScroll={onScroll}>
    //   <div className="navigation-dots">
    //     <div className="dot" ref={dots[0]} default-active/>
    //     <div className="dot" ref={dots[1]} />
    //     <div className="dot" ref={dots[2]} />
    //     <div className="dot" ref={dots[3]} />
    //   </div>
    //   <One/>
    //   <Two/>
    // </div>
  );
}

export default App;
