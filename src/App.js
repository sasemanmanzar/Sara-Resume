import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

import { useState } from 'react';

// import Test from './Pages/test';

function App() {

    // const button = () => {
    //   alert("Hi!");
    // }
  
  // const backgroundDot1 = document.getElementById();
  
  // const [backgroundDot1 , setBackgroundDot1] = useState('gold');
  // const [backgroundDot2 , setBackgroundDot2] = useState('gold');
  // const [backgroundDot3 , setBackgroundDot3] = useState('gold');
  // const [backgroundDot4 , setBackgroundDot4] = useState('gold');
  // const [backgroundDot5 , setBackgroundDot5] = useState('gold');
  // const [backgroundDot6 , setBackgroundDot6] = useState('gold');

  // const [backgroundDot , setBackgroundDot] = useState({
  //   dot1: "gold",
  //   dot2: "gold",
  //   dot3: "gold",
  //   dot4: "gold",
  //   dot5: "gold",
  //   dot6: "gold"
  // });

  // const [activeDot , setActiveDot] = useState(false);

  const [activeDot , setActiveDot] = useState({
    dot1: false,
    dot2: false,
    dot3: false,
    dot4: false,
    dot5: false,
    dot6: false
  });


  // const Dot6 = document.getElementById('dot6');


  const scrollToMarginPage1 = () => {
    const marginDot1 = document.getElementById('IdOne'); 
      if (marginDot1) {
        marginDot1.scrollIntoView();
        // setBackgroundDot.dot1("red");
        // setBackgroundDot.dot2("gold");
        
        // setBackgroundDot(previousState => {
        //   return { ...previousState, dot1: "blue" }
        // });

        // setBackgroundDot(() => {
        //   return { dot1: "blue" , dot2:'gold' , dot3:'gold', dot4:'gold', dot5:'gold', dot6:'gold' }
        // });
        
        setActiveDot(() => {
          return { dot1: true, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage2 = () => {
    const marginDot2 = document.getElementById('IdTwo'); 
      if (marginDot2) {
        marginDot2.scrollIntoView();
        // setBackgroundDot2("red");
        // setBackgroundDot(previousState => {
        //   return { ...previousState, dot2: "blue" }
        // });
        // setBackgroundDot(() => {
        //   return { dot1: "gold" , dot2:'blue' , dot3:'gold', dot4:'gold', dot5:'gold', dot6:'gold' }
        // });
        // setActiveDot(true);
        
        setActiveDot(() => {
            return { dot1: false, dot2: true, dot3: false, dot4:false, dot5:false, dot6:false }
          });
      }
  };


  const scrollToMarginPage3 = () => {
    const marginDot3 = document.getElementById('IdThree'); 
      if (marginDot3) {
        marginDot3.scrollIntoView();
        // setBackgroundDot3("red");
        // setBackgroundDot(() => {
        //   return { dot1: "gold" , dot2:'gold' , dot3:'blue', dot4:'gold', dot5:'gold', dot6:'gold' }
        // });
        // setActiveDot(true);
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: true, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage4 = () => {
    const marginDot4 = document.getElementById('IdFour'); 
      if (marginDot4) {
        marginDot4.scrollIntoView();
        // setBackgroundDot4("red");
        // setBackgroundDot(() => {
        //   return { dot1: "gold" , dot2:'gold' , dot3:'gold', dot4:'blue', dot5:'gold', dot6:'gold' }
        // });
        // setActiveDot(true);
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:true, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage5 = () => {
    const marginDot5 = document.getElementById('IdFive'); 
      if (marginDot5) {
        marginDot5.scrollIntoView();
        // setBackgroundDot5("red");
        // setBackgroundDot(() => {
        //   return { dot1: "gold" , dot2:'gold' , dot3:'gold', dot4:'gold', dot5:'blue', dot6:'gold' }
        // });
        // setActiveDot(true);
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:true, dot6:false }
        });
      }
  };

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix'); 
      if (marginDot6) {
        marginDot6.scrollIntoView();
        // setBackgroundDot6("red");
        // setBackgroundDot(() => {
        //   return { dot1: "gold" , dot2:'golg' , dot3:'gold', dot4:'gold', dot5:'gold', dot6:'blue' }
        // });
        // Dot6.backgroundColor('red');
        // setActiveDot(true);
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:true }
        });
      }
  };

  // می خواهیم بررسی کنیم اگر در صفحه اول هست کلاس نیم جدید داشته باشن دایره زردا در غیر این صورت سیرکل اجرا بشه
  // const specialPageOne = () => {
  //   if (marginDot1){}
  // };

  return (
    <div>
      <div>    
        <div className='circle dot1' onClick={scrollToMarginPage1} style={{backgroundColor: activeDot.dot1? 'red' : 'gold' }}/>
        <div className='circle dot2' onClick={scrollToMarginPage2} style={{backgroundColor: activeDot.dot2? 'red' : 'gold' }}/>
        <div className='circle dot3' onClick={scrollToMarginPage3} style={{backgroundColor: activeDot.dot3? 'red' : 'gold' }}/>
        <div className='circle dot4' onClick={scrollToMarginPage4} style={{backgroundColor: activeDot.dot4? 'red' : 'gold' }}/>
        <div className='circle dot5' onClick={scrollToMarginPage5} style={{backgroundColor: activeDot.dot5? 'red' : 'gold' }}/>
        <div className='circle dot6' onClick={scrollToMarginPage6} style={{backgroundColor: activeDot.dot6? 'red' : 'gold' }} />
      </div>

      {/* <article className='scroller'>
        <section><One/></section>
        <section><Two/></section>
        <section><Three/></section>
        <section><Four/></section>
        <section><Five/></section>
        <section><Six/></section>
      </article> */}


      {/* <div> 
            1: {backgroundDot.dot1} <br/>
            2: {backgroundDot.dot2} <br/>
            3: {backgroundDot.dot3} <br/> 
            4: {backgroundDot.dot4} <br/>
            5: {backgroundDot.dot5} <br/>
            6: {backgroundDot.dot6} <br/>
      </div> */}

      <div className='scroller'>
        <div className='section'><One/></div>
        <div className='section'><Two/></div>
        <div className='section'><Three/></div>
        <div className='section'><Four/></div>
        <div className='section'><Five/></div>
        <div className='section'><Six/></div>
      </div>

        {/* <One/>
        <Two/>
        <Three/>
        <Four/>
        <Five/>
        <Six/> */}

    </div>
  );
}

export default App;
