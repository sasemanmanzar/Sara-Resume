// import logo from './logo.svg';
import './App.css';
import sky from './sky.png';
import One from './Pages/One/One'
import Two from './Pages/Two/Two';


function App() {

    const button = () => {
      alert("Hi!");
    }

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={One}/>
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
