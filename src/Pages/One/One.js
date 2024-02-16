import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useCallback, useState } from 'react';

function One(){

    // const button = () => {
    //     alert("Hi!");
    // }

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


      var Width1 = document.documentElement.clientWidth;
      var Width2 = document.body.clientWidth;
      var Width3 = window.innerWidth;
      var Width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
      // window.screen.width;

      // const [WhatClientWidth, setClientWidth] = useState('0');
      // setClientWidth({Width});
      // setCar({color: "blue"})

    return(
        <div id='IdOne' className='one'>
            <div>{Width1} <br/> {Width2} <br/> {Width3} <br/> </div>

            <div className='boxPicText'>
                <img className='picSara' src={picSara} alt="" />
                <div className='textPageOne'>سارا آسمان منظر</div>
             </div>
             
             <div className='circlePageOne circlePageOne1' onClick={scrollToMarginPage6}><p>تماس با ما</p></div>
             <div className='circlePageOne circlePageOne2' onClick={scrollToMarginPage5}><p>تجارب</p></div>
             <div className='circlePageOne circlePageOne3' onClick={scrollToMarginPage4}><p>مهارت ها</p></div>
             <div className='circlePageOne circlePageOne4' onClick={scrollToMarginPage3}><p>مقالات</p></div>
             <div className='circlePageOne circlePageOne5' onClick={scrollToMarginPage2}><p>سوابق تحصیلی</p></div>

        </div>
    );
}

export default One;