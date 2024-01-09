// import logo from './logo.svg';
// import './App.css';
import sky from './Pages/One/sky.png';
import One from './Pages/One/One'
import Two from './Pages/Two/Two';


function App() {

    const button = () => {
      alert("Hi!");
    }

  return (
    <div>

  
    <div className='mainImg'>
      <div className='circle'/>
      <div className='circle' style={{ marginTop:'15px'}} onClick={button} />
      <div className='circle' style={{ marginTop:'15px'}} onClick={Two}/>
      <div className='circle' style={{ marginTop:'15px'}} />
      <div className='circle' style={{ marginTop:'15px'}} />
    </div>

    </div>




    // <div className="pages" ref={fullPageRef} onScroll={onScroll}>
    //   <div className="navigation-dots">
    //     <div className="dot" ref={dots[0]} default-active/>
    //     <div className="dot" ref={dots[1]} />
    //     <div className="dot" ref={dots[2]} />
    //     <div className="dot" ref={dots[3]} />
    //   </div>
    //   <One/>
    //   <Two/>
    // </div>
  );
}

export default App;
