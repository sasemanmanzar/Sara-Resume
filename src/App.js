import { useCallback, useRef, useState } from 'react';

import './App.css';
import One, { usePageSize } from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';
import strings from './strings';

function App() {
  const [activeDot, setActiveDot] = useState(1);

  const scrollerElementRef = useRef();

  const pageRef1 = useRef();
  const pageRef2 = useRef();
  const pageRef3 = useRef();
  const pageRef4 = useRef();
  const pageRef5 = useRef();
  const pageRef6 = useRef();

  // const s = strings.fa;
  // const textFa = strings.fa;
  // const textEn = strings.en;
  // const language = strings.fa;
  // const language = strings.en;

  const [language, setLanguageOrg] = useState(strings.fa);
  const [lang, setLang] = useState("fa");
  const [langNow, setLongNow] = useState("fa");
  function setLanguage() {
    if (lang === 'fa') {
      setLang('en');
      setLanguageOrg(strings.fa);
      setLongNow('fa');
    }
    else {
      setLang('fa');
      setLanguageOrg(strings.en);
      setLongNow('en');
    }
  }


  const scrollToMarginPage1 = useCallback(() => {
    if (pageRef1.current) {
      pageRef1.current.scrollIntoView();
      setActiveDot(1);
    }
  }, []);

  const scrollToMarginPage2 = useCallback(() => {
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
  }, []);

  const scrollToMarginPage3 = useCallback(() => {
    if (pageRef3.current) {
      pageRef3.current.scrollIntoView();
      setActiveDot(3);
    }
  }, []);

  const scrollToMarginPage4 = useCallback(() => {
    if (pageRef4.current) {
      pageRef4.current.scrollIntoView();
      setActiveDot(4);
    }
  }, []);

  const scrollToMarginPage5 = useCallback(() => {
    if (pageRef5.current) {
      pageRef5.current.scrollIntoView();
      setActiveDot(5);
    }
  }, []);

  const scrollToMarginPage6 = useCallback(() => {
    if (pageRef6.current) {
      pageRef6.current.scrollIntoView();
      setActiveDot(6);
    }
  }, []);

  // const [width, height] = usePageSize();
  const height = usePageSize()[1];

  // const onScroll = () => {
  //   if (scrollerElementRef.current) {
  //     const scrollTop = scrollerElementRef.current.scrollTop;
  //     setActiveDot((Math.round((scrollTop / height)))+1);
  //   }
  // }

  const onScroll = useCallback(() => {
    if (scrollerElementRef.current) {
      const scrollTop = scrollerElementRef.current.scrollTop;
      setActiveDot((Math.round((scrollTop / height))) + 1);
    }
  }, [height]);

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
        <div className='section'>
          <One text={language} pageRef={pageRef1} pageRef2={pageRef2} pageRef3={pageRef3} pageRef4={pageRef4} pageRef5={pageRef5} pageRef6={pageRef6} lang={lang} setLanguage={setLanguage} langNow={langNow}/>
        </div>
        <div className='section'>
          <Two text={language} pageRef={pageRef2} langNow={langNow} />
        </div>
        <div className='section'>
          <Three text={language} pageRef={pageRef3} />
        </div>
        <div className='section'>
          <Four text={language} pageRef={pageRef4} />
        </div>
        <div className='section'>
          <Five text={language} pageRef={pageRef5} />
        </div>
        <div className='section'>
          <Six text={language} pageRef={pageRef6} />
        </div>
      </div>
    </div>
  );
}

export default App;
