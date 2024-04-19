import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

import { useState } from 'react';

// import Test from './Pages/test';

function App() {

    // const button = () => {
    //   alert("Hi!");
    // }
  
  const [activeDot , setActiveDot] = useState({
    dot1: false,
    dot2: false,
    dot3: false,
    dot4: false,
    dot5: false,
    dot6: false
  });

  // const backgroundDot1 = document.getElementById('dot1');
  // const backgroundDot2 = document.getElementById('dot2');

  // const sara ='';

  const scrollToMarginPage1 = () => {
    const marginDot1 = document.getElementById('IdOne'); 
      if (marginDot1) {
        marginDot1.scrollIntoView();
        
        // setBackgroundDot.dot1("red");
        setActiveDot(() => {
          return { dot1: true, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage2 = () => {
    const marginDot2 = document.getElementById('IdTwo'); 
      if (marginDot2) {
        marginDot2.scrollIntoView();
        
        setActiveDot(() => {
            return { dot1: false, dot2: true, dot3: false, dot4:false, dot5:false, dot6:false }
          });
        
          // backgroundDot1.backgroundColor();
          // sara = backgroundDot2.backgroundColor;
      }
  };


  const scrollToMarginPage3 = () => {
    const marginDot3 = document.getElementById('IdThree'); 
      if (marginDot3) {
        marginDot3.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: true, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage4 = () => {
    const marginDot4 = document.getElementById('IdFour'); 
      if (marginDot4) {
        marginDot4.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:true, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage5 = () => {
    const marginDot5 = document.getElementById('IdFive'); 
      if (marginDot5) {
        marginDot5.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:true, dot6:false }
        });
      }
  };

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix'); 
      if (marginDot6) {
        marginDot6.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:true }
        });
      }
  };

  // می خواهیم بررسی کنیم اگر در صفحه اول هست کلاس نیم جدید داشته باشن دایره زردا در غیر این صورت سیرکل اجرا بشه
  // const specialPageOne = () => {
  //   if (marginDot1){}
  // };

  return (
    <div>
      <div>    
        <div id="dot1" className='circle dot1' onClick={scrollToMarginPage1} style={{backgroundColor: activeDot.dot1? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot2" className='circle dot2' onClick={scrollToMarginPage2} style={{backgroundColor: activeDot.dot2? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot3" className='circle dot3' onClick={scrollToMarginPage3} style={{backgroundColor: activeDot.dot3? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot4" className='circle dot4' onClick={scrollToMarginPage4} style={{backgroundColor: activeDot.dot4? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot5" className='circle dot5' onClick={scrollToMarginPage5} style={{backgroundColor: activeDot.dot5? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot6" className='circle dot6' onClick={scrollToMarginPage6} style={{backgroundColor: activeDot.dot6? 'rgba(8,46,108,0.85)' : 'gold' }} />
      </div>

      {/* <article className='scroller'>
        <section><One/></section>
        <section><Two/></section>
        <section><Three/></section>
        <section><Four/></section>
        <section><Five/></section>
        <section><Six/></section>
      </article> */}


      {/* <div> 
            1: {backgroundDot.dot1} <br/>
            2: {backgroundDot.dot2} <br/>
            3: {backgroundDot.dot3} <br/> 
            4: {backgroundDot.dot4} <br/>
            5: {backgroundDot.dot5} <br/>
            6: {backgroundDot.dot6} <br/>
      </div> */}
      {/* <div>{sara}</div> */}

      <div className='scroller'>
        <div className='section'><One/></div>
        <div className='section'><Two/></div>
        <div className='section'><Three/></div>
        <div className='section'><Four/></div>
        <div className='section'><Five/></div>
        <div className='section'><Six/></div>
      </div>

        {/* <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/> */}

    </div>
  );
}

export default App;
