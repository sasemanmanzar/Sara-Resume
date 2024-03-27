import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useState, useEffect, useRef } from 'react';

function One(){

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

      // const [isMoreSara , setMoreSara] = useState(false);
      // const onSaraClick = useCallback( () => { setMoreSara(!isMoreSara); } , [isMoreSara] );
      // const infoClassSara = (isMoreSara ?  "Rectangle-Large" : "sara_area Rectangle");

      // const [isWidthTurningPoint, setAnimation] = useState(false);
      // const onSaraClick = useCallback( () => { setAnimation(!isWidthTurningPoint); } , [isWidthTurningPoint] );
      // const infoClassSara = (isWidthTurningPoint ?  "Rectangle-Large" : "sara_area Rectangle");

      // var Width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
     

        const [width, setWidth]   = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);

        // const previousWidthValue = useRef(width);
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

        // function handleAnimation() {
        //   document.getElementById("boxPicText").style.backgroundColor = "blue";
        // }

    return(
        <div id='IdOne' className='one'>
            <div style={{color:"red"}}>{width} <br/> {height} <br/> old= <br/> {previousWidthValue.current} <br/> {previousHeightValue.current}</div> 

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

                  {/* <div className='circlePageOne' onClick={scrollToMarginPage6}><p>تماس با ما</p></div>
                  <div className='circlePageOne' onClick={scrollToMarginPage5}><p>تجارب</p></div>
                  <div className='circlePageOne' onClick={scrollToMarginPage4}><p>مهارت ها</p></div>
                  <div className='circlePageOne' onClick={scrollToMarginPage3}><p>مقالات</p></div>
                  <div className='circlePageOne' onClick={scrollToMarginPage2}><p>تحصیلات</p></div> */}
              </div>
            </div>
        </div>
    );
}

export default One;