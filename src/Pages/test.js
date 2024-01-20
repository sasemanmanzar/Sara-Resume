import './test.css';
// import One from './One/One';
import Two from './Two/Two';
import Three from './Three/Three';
import Four from './Four/Four';
import Five from './Five/Five';
import One from './One/One';

function Test() {

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

  // می خواهیم بررسی کنیم اگر در صفحه اول هست کلاس نیم جدید داشته باشن دایره زردا در غیر این صورت سیرکل اجرا بشه
  // const specialPageOne = () => {
  //   if (marginDot1){}
  // };

  return (
    <div>
      <div>
        <div className='circleTest dot1' onClick={scrollToMarginPage1} />
        <div className='circleTest dot2' onClick={scrollToMarginPage2} />
        <div className='circleTest dot3' onClick={scrollToMarginPage3} />
        <div className='circleTest dot4' onClick={scrollToMarginPage4} />
        <div className='circleTest dot5' onClick={scrollToMarginPage5} />
        {/* <div className='circle dot6' onClick={button} /> */}
      </div>

      {/* <One/> */}
      <Two/>
      <Three/>
      <Four/>
      <Five/>
    </div>
  );
}

export default Test;
