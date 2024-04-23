import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useState, useEffect, useRef } from 'react';

// function One(props) {
//   const { pageRef, sara, setSara } = props;

// function One({ pageRef, sara, setSara }) {

function One({ pageRef }) {


  // const shalgham = { barge: "sabz", geli: "ghaveii" };
  // console.log(shalgham.barge);

  // const barge = shalgham.barge;
  // console.log(barge);

  // const { barge } = shalgham;
  // console.log(barge);

  // props.setSara("mohammad");
  // setSara("mohammad");
  // console.log(sara);

  const scrollToMarginPage2 = () => {
    const marginDot2 = document.getElementById('IdTwo');
    if (marginDot2) {
      marginDot2.scrollIntoView();
    }
  };

  const scrollToMarginPage3 = () => {
    const marginDot3 = document.getElementById('IdThree');
    if (marginDot3) {
      marginDot3.scrollIntoView();
    }
  };

  const scrollToMarginPage4 = () => {
    const marginDot4 = document.getElementById('IdFour');
    if (marginDot4) {
      marginDot4.scrollIntoView();
    }
  };

  const scrollToMarginPage5 = () => {
    const marginDot5 = document.getElementById('IdFive');
    if (marginDot5) {
      marginDot5.scrollIntoView();
    }
  };

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix');
    if (marginDot6) {
      marginDot6.scrollIntoView();
    }
  };



  return (
    <div id='IdOne' className='one' ref={pageRef}>
      <PageSize />
      <div className='boxAll'>
        <div id="boxPicText" className='boxPicText'>
          <img className='picSara' src={picSara} alt="" />
          <div className='textPageOne'>سارا آسمان منظر</div>
        </div>

        <div id="Circles" className='boxCircles'>
          <div className='circlePageOne' onClick={scrollToMarginPage6}>تماس با ما</div>
          <div className='circlePageOne' onClick={scrollToMarginPage5}>تجارب</div>
          <div className='circlePageOne' onClick={scrollToMarginPage4}>مهارت ها</div>
          <div className='circlePageOne' onClick={scrollToMarginPage3}>مقالات</div>
          <div className='circlePageOne' onClick={scrollToMarginPage2}>تحصیلات</div>
        </div>
      </div>
    </div>
  );
}

export function PageSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const previousWidthValue = useRef("");
  const previousHeightValue = useRef("");

  useEffect(() => {
    previousWidthValue.current = width;
  }, [width]);

  useEffect(() => {
    previousHeightValue.current = height;
  }, [height]);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div style={{ color: "red" }}>{width} <br /> {height} <br /> old= <br /> {previousWidthValue.current} <br /> {previousHeightValue.current}</div>
  )
}

export default One;