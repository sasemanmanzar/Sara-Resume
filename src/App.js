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

    const marginDot1 = document.getElementById('IdOne');
    const marginDot2 = document.getElementById('IdTwo');
    const marginDot3 = document.getElementById('IdThree');
    const marginDot4 = document.getElementById('IdFour');
    const marginDot5 = document.getElementById('IdFive');

    const Dot1 = () => {
      if (marginDot1) {
        marginDot1.scrollIntoView();
      }
    };

    const Dot2 = () => {
      if (marginDot2) {
        marginDot2.scrollIntoView();
      }
    };

    const Dot3 = () => {
      if (marginDot3) {
        marginDot3.scrollIntoView();
      }
    };

    const Dot4 = () => {
      if (marginDot4) {
        marginDot4.scrollIntoView();
      }
    };

    const Dot5 = () => {
      if (marginDot5) {
        marginDot5.scrollIntoView();
      }
    };

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={Dot1} />
        <div className='circle dot2' onClick={Dot2} />
        <div className='circle dot3' onClick={Dot3} />
        <div className='circle dot4' onClick={Dot4} />
        <div className='circle dot5' onClick={Dot5} />
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
