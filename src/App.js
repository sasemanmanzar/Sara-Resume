// import logo from './logo.svg';
import './App.css';
import sky from './sky.png';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import { useState , useCallback } from 'react';

// import sara from './scrollToMargin';

function App() {

    const button = () => {
      alert("Hi!");
    }

    // const [alanOne , setOne] = useState("");

    // const pageOne = useCallback( () => { return(<div><One/></div>) } , [] );

    const marginElement = document.getElementById('IdOne');
    const sara1 = () => {
      if (marginElement) {
        marginElement.scrollIntoView();
      }
    };

    // const cDot1 = () => {return(<div style={{margin:0}}></div>)};

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={sara1}/>
        <div className='circle dot2' onClick={Two} />
        <div className='circle dot3' onClick={button}/>
        <div className='circle dot4' />
        <div className='circle dot5' />
      </div>

      <One/>
      <Two/>
    </div>
  );
}

export default App;
