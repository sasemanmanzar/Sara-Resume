import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useState, useEffect, useRef } from 'react';

function One({ text, langNow, pageRef, pageRef2, pageRef3, pageRef4, pageRef5, pageRef6 }) {

  const Text = text.main;

  const scrollToMarginPage2 = () => {
    if (pageRef2.current) {
      pageRef2.current.scrollIntoView();
    }
  };

  const scrollToMarginPage3 = () => {
    if (pageRef3.current) {
      pageRef3.current.scrollIntoView();
    }
  };

  const scrollToMarginPage4 = () => {
    if (pageRef4.current) {
      pageRef4.current.scrollIntoView();
    }
  };

  const scrollToMarginPage5 = () => {
    if (pageRef5.current) {
      pageRef5.current.scrollIntoView();
    }
  };

  const scrollToMarginPage6 = () => {
    if (pageRef6.current) {
      pageRef6.current.scrollIntoView();
    }
  };

  return (
    <div id='IdOne' className='one' ref={pageRef}>
      {/* <PageSize /> */}
      <div className='boxAll'>
      <div className={langNow}>

        <div id="boxPicText" className='boxPicText'>
          <img className='picSara' src={picSara} alt="" />
          <div className='textPageOne'>{Text.myName}</div>
        </div>

        <div id="Circles" className='boxCircles'>
          <div className='circlePageOne' onClick={scrollToMarginPage6}>{Text.titleContact}</div>
          <div className='circlePageOne' onClick={scrollToMarginPage5}>{Text.titleExperience}</div>
          <div className='circlePageOne' onClick={scrollToMarginPage4}>{Text.titleSkills}</div>
          <div className='circlePageOne' onClick={scrollToMarginPage3}>{Text.titlePublication}</div>
          <div className='circlePageOne' onClick={scrollToMarginPage2}>{Text.titleEducation}</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export function usePageSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return [width, height];
}

export function PageSize() {
  const [width, height] = usePageSize();

  const previousWidthValue = useRef("");
  const previousHeightValue = useRef("");

  useEffect(() => {
    previousWidthValue.current = width;
  }, [width]);

  useEffect(() => {
    previousHeightValue.current = height;
  }, [height]);

  return (
    <div style={{ color: "red" }}>{width} <br /> {height} <br /> old= <br /> {previousWidthValue.current} <br /> {previousHeightValue.current}</div>
  )
}

export default One;