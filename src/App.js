import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

import { useState } from 'react';

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

  const allFalse = () => {
    setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
        });
  }

  // const Dot1 = document.getElementById('dot1');
  // const Dot2 = document.getElementById('dot2');
  // const Dot3 = document.getElementById('dot3');
  // const Dot4 = document.getElementById('dot4');
  // const Dot5 = document.getElementById('dot5');
  // const Dot6 = document.getElementById('dot6');

  // const marginDot1 = document.getElementById('IdOne'); 
  // const marginDot2 = document.getElementById('IdTwo'); 
  // const marginDot3 = document.getElementById('IdThree'); 
  // const marginDot4 = document.getElementById('IdFour'); 
  // const marginDot5 = document.getElementById('IdFive'); 
  // const marginDot6 = document.getElementById('IdSix'); 


  // const changeCircleBg2 = () => {
  //   console.log('sara');
  // }


  // useEffect(() => {
    //  document.addEventListener('wheel', (event) => {console.log('i scrolled')});

    // window.addEventListener('scroll', changeCircleBg2);
    // return () => {
    //   window.removeEventListener('scroll', changeCircleBg2);
    // }
  // }, [])


  const scrollToMarginPage1 = () => {
    const marginDot1 = document.getElementById('IdOne'); 
      if (marginDot1) {
        marginDot1.scrollIntoView();
        
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot1:true }
        });

        // setBackgroundDot.dot1("red");

        // setActiveDot(() => {
        //   return { dot1: true, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
        // });
      }
  };

  const scrollToMarginPage2 = () => {
    const marginDot2 = document.getElementById('IdTwo'); 
      if (marginDot2) {
        marginDot2.scrollIntoView();
        
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot2:true }
        });
      }
  };


  const scrollToMarginPage3 = () => {
    const marginDot3 = document.getElementById('IdThree'); 
      if (marginDot3) {
        marginDot3.scrollIntoView();
         
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot3:true }
        });
      }
  };

  const scrollToMarginPage4 = () => {
    const marginDot4 = document.getElementById('IdFour'); 
      if (marginDot4) {
        marginDot4.scrollIntoView();
         
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot4:true }
        });
      }
  };

  const scrollToMarginPage5 = () => {
    const marginDot5 = document.getElementById('IdFive'); 
      if (marginDot5) {
        marginDot5.scrollIntoView();
         
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot5:true }
        });
      }
  };

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix'); 
      if (marginDot6) {
        marginDot6.scrollIntoView();
        
        
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot6:true }
        });
      }
  };

  const Fdot1 = (e) => {
      // const Dot1 = document.getElementById('dot1');
      // const Dot2 = document.getElementById('dot2');
      if(e.deltaY === 1){
        // Dot2.style.backgroundColor = "rgba(8,46,108,0.85)";
        // Dot1.style.backgroundColor = "gold";
        allFalse();
        setActiveDot((els) => {
          return { ...els, dot2:true }
        });
      }
  }

  const Fdot2 = (e) => {
    if(e.deltaY === 1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot3:true }
        });
    }
    else if (e.deltaY === -1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot1:true }
        });
    }
  }

  const Fdot3 = (e) => {
    if(e.deltaY === 1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot4:true }
        });
    }
    else if (e.deltaY === -1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot2:true }
        });
    }
  }

  const Fdot4 = (e) => {
    if(e.deltaY === 1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot5:true }
        });
    }
    else if (e.deltaY === -1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot3:true }
        });
    }
  }

  const Fdot5 = (e) => {
    if(e.deltaY === 1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot6:true }
        });
    }
    else if (e.deltaY === -1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot4:true }
        });
    }
  }

  const Fdot6 = (e) => {
    if(e.deltaY === -1){
      allFalse();
        setActiveDot((els) => {
          return { ...els, dot5:true }
        });
    }
  }


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

      <div className='scroller'>
        <div className='section' onWheel = {(e) => Fdot1(e)}><One/></div>
        <div className='section' onWheel = {(e) => Fdot2(e)}><Two/></div>
        <div className='section' onWheel = {(e) => Fdot3(e)}><Three/></div>
        <div className='section' onWheel = {(e) => Fdot4(e)}><Four/></div>
        <div className='section' onWheel = {(e) => Fdot5(e)}><Five/></div>
        <div className='section' onWheel = {(e) => Fdot6(e)}><Six/></div>
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
