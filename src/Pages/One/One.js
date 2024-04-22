import './One.css';
import picSara from '../../Pic/sara.jpg';
import React, { useState, useEffect, useRef, useContext } from 'react';

// import {AppContext} from '../../App';
// import {activeDot , setActiveDot} from '../../App';
// import {setActiveDot} from '../../App';


function One(props){

      // console.log(props.activeDotApp.dot1);
      const activeDotPgOne = [props.activeDotApp.dot1 , props.activeDotApp.dot2, props.activeDotApp.dot3, props.activeDotApp.dot4, props.activeDotApp.dot5,props.activeDotApp.dot6];
      
      console.log(activeDotPgOne);

      // const sara = useContext(activeDot);

      // const sara = (activeDot) => {
      //   setActiveDot((els) => {
      //     return { ...els, dot5:true }
      //   });
      // }
      // const sara = [activeDot , setActiveDot] = useState({
      //   dot1: false,
      //   dot2: false,
      //   dot3: false,
      //   dot4: false,
      //   dot5: false,
      //   dot6: false
      // });

      // function sara(props){
      //   // setActiveDot(() => {
      //   //           return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
      //   //         });
      //   const ee = props.activeDot.dot1;
      //   console.log(ee);
      // }


      // const [activeDot , setActiveDot] = useState({
      //   dot1: false,
      //   dot2: false,
      //   dot3: false,
      //   dot4: false,
      //   dot5: false,
      //   dot6: false
      // });

      // const allFalse = () => {
      //   setActiveDot(() => {
      //         return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
      //       });
      // }

      const scrollToMarginPage2 = () => {
        const marginDot2 = document.getElementById('IdTwo'); 
          if (marginDot2) {
            marginDot2.scrollIntoView();
            // allFalse();
            // setActiveDot((els) => {
            //   return { ...els, dot2:true }
            // });

            // const Dot1 = document.getElementById('dot1');
          }
      };

      const scrollToMarginPage3 = () => {
        const marginDot3 = document.getElementById('IdThree'); 
          if (marginDot3) {
            marginDot3.scrollIntoView();
            // allFalse();
            // setActiveDot((els) => {
            //   return { ...els, dot3:true }
            // });
          }
      };
    
      const scrollToMarginPage4 = () => {
        const marginDot4 = document.getElementById('IdFour'); 
          if (marginDot4) {
            marginDot4.scrollIntoView();
            // allFalse();
            // setActiveDot((els) => {
            //   return { ...els, dot4:true }
            // });
          }
      };
    
      const scrollToMarginPage5 = () => {
        const marginDot5 = document.getElementById('IdFive'); 
          if (marginDot5) {
            marginDot5.scrollIntoView();
            // allFalse();
            // setActiveDot((els) => {
            //   return { ...els, dot5:true }
            // });
          }
      };

      const scrollToMarginPage6 = () => {
        const marginDot6 = document.getElementById('IdSix'); 
          if (marginDot6) {
            marginDot6.scrollIntoView();
            // allFalse();
            // setActiveDot((els) => {
            //   return { ...els, dot6:true }
            // });
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
            {/* <div style={{color:"red"}}>{width} <br/> {height} <br/> old= <br/> {previousWidthValue.current} <br/> {previousHeightValue.current}</div>  */}

            {/* <button onClick={sara}> sssss </button> */}

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