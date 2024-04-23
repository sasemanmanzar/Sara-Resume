import { useRef, useState } from 'react';

import './App.css';
import One, { usePageSize } from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

function App() {
  // const [sara, setSara] = useState("mohsen");

  const [activeDot, setActiveDot] = useState(1);

  const scrollerElementRef = useRef();

  const pageRef1 = useRef();
  const pageRef2 = useRef();
  const pageRef3 = useRef();
  const pageRef4 = useRef();
  const pageRef5 = useRef();
  const pageRef6 = useRef();


  const scrollToMarginPage1 = () => {
    // const marginDot1 = document.getElementById('IdOne');
    // const marginDot1 = pageRef1.current;
    if (pageRef1.current) {
      pageRef1.current.scrollIntoView();
      setActiveDot(1);
    }
  };

  const scrollToMarginPage2 = () => {
    // const marginDot2 = document.getElementById('IdTwo');
    // const marginDot2 = pageRef2.current;
    // if (marginDot2) {
    //   marginDot2.scrollIntoView();
    //   setActiveDot(2);
    // }
    if (pageRef2.current) {
        pageRef2.current.scrollIntoView();
        setActiveDot(2);
      }
  };

  const scrollToMarginPage3 = () => {
    // const marginDot3 = document.getElementById('IdThree');
    // const marginDot3 = pageRef3.current;
    if (pageRef3.current) {
      pageRef3.current.scrollIntoView();
      setActiveDot(3);
    }
  };

  const scrollToMarginPage4 = () => {
    // const marginDot4 = document.getElementById('IdFour');
    // const marginDot4 = pageRef4.current;
    if (pageRef4.current) {
      pageRef4.current.scrollIntoView();
      setActiveDot(4);
    }
  };

  const scrollToMarginPage5 = () => {
    // const marginDot5 = document.getElementById('IdFive');
    // const marginDot5 = pageRef5.current;
    if (pageRef5.current) {
      pageRef5.current.scrollIntoView();
      setActiveDot(5);
    }
  };

  const scrollToMarginPage6 = () => {
    // const marginDot6 = document.getElementById('IdSix');
    // const marginDot6 = pageRef6.current;
    if (pageRef6.current) {
      pageRef6.current.scrollIntoView();
      setActiveDot(6);
    }
  };

  // const [width, height] = usePageSize();
  const height = usePageSize()[1];

  const onScroll = () => {
    if (scrollerElementRef.current) {
      const scrollTop = scrollerElementRef.current.scrollTop;
      setActiveDot((Math.round((scrollTop / height)))+1);
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

      <div className='scroller' onScroll={onScroll} ref={scrollerElementRef}>
        <div className='section'> {/* onWheel={(e) => Fdot1(e)}> */}
          <One pageRef={pageRef1} pageRef2={pageRef2} pageRef3={pageRef3} pageRef4={pageRef4} pageRef5={pageRef5} pageRef6={pageRef6}  />
        </div>
        <div className='section'> {/* onWheel={(e) => Fdot2(e)}> */}
          <Two pageRef={pageRef2} />
        </div>
        <div className='section'> {/* onWheel={(e) => Fdot3(e)}> */}
          <Three pageRef={pageRef3} />
        </div>
        <div className='section'> {/* onWheel={(e) => Fdot4(e)}> */}
          <Four pageRef={pageRef4} />
        </div>
        <div className='section'> {/* onWheel={(e) => Fdot5(e)}> */}
          <Five pageRef={pageRef5} />
        </div>
        <div className='section'> {/* onWheel={(e) => Fdot6(e)}> */}
          <Six pageRef={pageRef6} />
        </div>
      </div>
    </div>
  );
}

export default App;
