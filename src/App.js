import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

// import Test from './Pages/test';

function App() {

    // const button = () => {
    //   alert("Hi!");
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

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix'); 
      if (marginDot6) {
        marginDot6.scrollIntoView();
      }
  };

  // می خواهیم بررسی کنیم اگر در صفحه اول هست کلاس نیم جدید داشته باشن دایره زردا در غیر این صورت سیرکل اجرا بشه
  // const specialPageOne = () => {
  //   if (marginDot1){}
  // };

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={scrollToMarginPage1} />
        <div className='circle dot2' onClick={scrollToMarginPage2} />
        <div className='circle dot3' onClick={scrollToMarginPage3} />
        <div className='circle dot4' onClick={scrollToMarginPage4} />
        <div className='circle dot5' onClick={scrollToMarginPage5} />
        <div className='circle dot6' onClick={scrollToMarginPage6} />
      </div>

      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
      <Six/>

    </div>
  );
}

export default App;
