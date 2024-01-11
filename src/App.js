import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';

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

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={scrollToMarginPage1} />
        <div className='circle dot2' onClick={scrollToMarginPage2} />
        <div className='circle dot3' onClick={scrollToMarginPage3} />
        <div className='circle dot4' onClick={scrollToMarginPage4} />
        <div className='circle dot5' onClick={scrollToMarginPage5} />
        {/* <div className='circle dot6' onClick={button} /> */}
      </div>

      <One/>
      <Two/>
      <Three/>
      <Four/>
      <Five/>
    </div>
  );
}

export default App;
