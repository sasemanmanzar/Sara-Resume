// import sky from '../../Pic/sky.png';
// import Two from '../Two/Two'
// import { useCallback } from 'react';

import './One.css';
import picSara from '../../Pic/sara.jpg';
// import App from '../../App';

function One(){

    // const button = () => {
    //     alert("Hi!");
    // }

    const scrollToMarginPage1 = () => {
        const marginDot1 = document.getElementById('IdOne'); 
          if (marginDot1) {
            marginDot1.scrollIntoView();
          }
      };

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

    return(
        <div id='IdOne' className='one'>
             <img className='picSara' src={picSara} alt="" />
             <div className='textPageOne'>سارا آسمان منظر</div>
             
             <div className='circlePageOne circlePageOne1' onClick={scrollToMarginPage5}><p>تماس با ما</p></div>
             <div className='circlePageOne circlePageOne2' onClick={scrollToMarginPage4}><p>تجارب</p></div>
             <div className='circlePageOne circlePageOne3' onClick={scrollToMarginPage3}><p>مهارت ها</p></div>
             <div className='circlePageOne circlePageOne4' onClick={scrollToMarginPage2}><p>مقالات</p></div>
             <div className='circlePageOne circlePageOne5' onClick={scrollToMarginPage1}><p>سوابق تحصیلی</p></div>

        </div>
    );
}

export default One;