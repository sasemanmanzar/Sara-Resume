import { useRef, useState } from 'react';

import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

function App() {
  // const [sara, setSara] = useState("mohsen");

  const [activeDot, setActiveDot] = useState(1);

  const pageRef1 = useRef();
  const pageRef2 = useRef();
  const pageRef3 = useRef();
  const pageRef4 = useRef();
  const pageRef5 = useRef();
  const pageRef6 = useRef();


  const scrollToMarginPage1 = () => {
    // const marginDot1 = document.getElementById('IdOne');
    const marginDot1 = pageRef1.current;
    if (marginDot1) {
      marginDot1.scrollIntoView();
      setActiveDot(1);
    }
  };

  const scrollToMarginPage2 = () => {
    // const marginDot2 = document.getElementById('IdTwo');
    const marginDot2 = pageRef2.current;
    if (marginDot2) {
      marginDot2.scrollIntoView();
      setActiveDot(2);
    }
  };

  const scrollToMarginPage3 = () => {
    // const marginDot3 = document.getElementById('IdThree');
    const marginDot3 = pageRef3.current;
    if (marginDot3) {
      marginDot3.scrollIntoView();
      setActiveDot(3);
    }
  };

  const scrollToMarginPage4 = () => {
    // const marginDot4 = document.getElementById('IdFour');
    const marginDot4 = pageRef4.current;
    if (marginDot4) {
      marginDot4.scrollIntoView();
      setActiveDot(4);
    }
  };

  const scrollToMarginPage5 = () => {
    // const marginDot5 = document.getElementById('IdFive');
    const marginDot5 = pageRef5.current;
    if (marginDot5) {
      marginDot5.scrollIntoView();
      setActiveDot(5);
    }
  };

  const scrollToMarginPage6 = () => {
    // const marginDot6 = document.getElementById('IdSix');
    const marginDot6 = pageRef6.current;
    if (marginDot6) {
      marginDot6.scrollIntoView();
      setActiveDot(6);
    }
  };

  const Fdot1 = (e) => {
    if (e.deltaY === 1) {
      setActiveDot(2);
    }
  }

  const Fdot2 = (e) => {
    if (e.deltaY === 1) {
      setActiveDot(3);
    }
    else if (e.deltaY === -1) {
      setActiveDot(1);
    }
  }

  const Fdot3 = (e) => {
    if (e.deltaY === 1) {
      setActiveDot(4);
    }
    else if (e.deltaY === -1) {
      setActiveDot(2);
    }
  }

  const Fdot4 = (e) => {
    if (e.deltaY === 1) {
      setActiveDot(5);
    }
    else if (e.deltaY === -1) {
      setActiveDot(3);
    }
  }

  const Fdot5 = (e) => {
    if (e.deltaY === 1) {
      setActiveDot(6);
    }
    else if (e.deltaY === -1) {
      setActiveDot(4);
    }
  }

  const Fdot6 = (e) => {
    if (e.deltaY === -1) {
      setActiveDot(5);
    }
  }


  return (
    <div>
      <div>
        <div id="dot1" className='circle dot1' onClick={scrollToMarginPage1} style={{ backgroundColor: (activeDot === 1) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
        <div id="dot2" className='circle dot2' onClick={scrollToMarginPage2} style={{ backgroundColor: (activeDot === 2) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
        <div id="dot3" className='circle dot3' onClick={scrollToMarginPage3} style={{ backgroundColor: (activeDot === 3) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
        <div id="dot4" className='circle dot4' onClick={scrollToMarginPage4} style={{ backgroundColor: (activeDot === 4) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
        <div id="dot5" className='circle dot5' onClick={scrollToMarginPage5} style={{ backgroundColor: (activeDot === 5) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
        <div id="dot6" className='circle dot6' onClick={scrollToMarginPage6} style={{ backgroundColor: (activeDot === 6) ? 'rgba(8,46,108,0.85)' : 'gold' }} />
      </div>

      <div className='scroller'>
        <div className='section' onWheel={(e) => Fdot1(e)}>
          <One pageRef={pageRef1} />
        </div>
        <div className='section' onWheel={(e) => Fdot2(e)}>
          <Two pageRef={pageRef2} />
        </div>
        <div className='section' onWheel={(e) => Fdot3(e)}>
          <Three pageRef={pageRef3} />
        </div>
        <div className='section' onWheel={(e) => Fdot4(e)}>
          <Four pageRef={pageRef4} />
        </div>
        <div className='section' onWheel={(e) => Fdot5(e)}>
          <Five pageRef={pageRef5} />
        </div>
        <div className='section' onWheel={(e) => Fdot6(e)}>
          <Six pageRef={pageRef6} />
        </div>
      </div>
    </div>
  );
}

export default App;
