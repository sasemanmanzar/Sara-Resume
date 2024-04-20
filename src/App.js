import './App.css';
import One from './Pages/One/One';
import Two from './Pages/Two/Two';
import Three from './Pages/Three/Three';
import Four from './Pages/Four/Four';
import Five from './Pages/Five/Five';
import Six from './Pages/Six/Six';

import { useState , useEffect } from 'react';

// import Test from './Pages/test';

function App() {

    // const button = () => {
    //   alert("Hi!");
    // }
  
  const [activeDot , setActiveDot] = useState({
    dot1: false,
    dot2: false,
    dot3: false,
    dot4: false,
    dot5: false,
    dot6: false
  });

  const Dot1 = document.getElementById('dot1');
  const Dot2 = document.getElementById('dot2');
  const Dot3 = document.getElementById('dot3');
  const Dot4 = document.getElementById('dot4');
  const Dot5 = document.getElementById('dot5');
  const Dot6 = document.getElementById('dot6');

  const marginDot1 = document.getElementById('IdOne'); 
  const marginDot2 = document.getElementById('IdTwo'); 
  const marginDot3 = document.getElementById('IdThree'); 
  const marginDot4 = document.getElementById('IdFour'); 
  const marginDot5 = document.getElementById('IdFive'); 
  const marginDot6 = document.getElementById('IdSix'); 

  // const changeBackground = () => {
  //   console.log(window.scrollY)
  //   if (window.scrollY >= 66) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }

  // const [offset, setOffset] = useState(0);
  // useEffect( () => {
  //   const onScroll = () => setOffset(window.scrollY);
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, {passive: true});
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // console.log("offset:");
  // console.log(offset);

    // const myFunc = () => {
    //     console.log('in myFunc');
    // }
    // var objTable = document.getElementById("test");

    // marginDot3.document.addEventListener("scroll", myFunc , false);

    // marginDot1.ariaCurrent.addEventListener('scroll' , myFunc);
  
  const changeCircleBg = () => {

    console.log('sara');
    // console.log(window.onscrollend);
    // console.log(ref.current.Dot1)
    // alert('ll');
    // if(marginDot6){
    //   alert('oooo');
    // }
    // console.log(  window.scrollBy(marginDot5) )
    // console.log(window.scrollTo(marginDot1))
      // if (marginDot1) {
      //   activeDot.dot1 = true;
      //   // Dot1.backgroundColor = 'red';
      //   // alert('p1');
      // }
      // else { 
      //   activeDot.dot1 = false; 
      // }

      // if (marginDot2) {
      //   activeDot.dot2 = true;
      // }
      // else { 
      //   activeDot.dot2 = false; 
      // }
      // console.log(window.scrollY)
      // if (window.scrollY >= 66){
      //   activeDot.dot2 = true;
      // }
      // else { 
      //   activeDot.dot2 = false; 
      // }
  }

  // toggleVisibility = () => {
  //   console.log('Do your thg');
  // };

  // const page3 = () => {
  //     console.log('page1');
  // };

  useEffect(() => {
    //  document.addEventListener('wheel', (event) => {console.log('i scrolled')});

    //  document.addEventListener('wheel', changeCircleBg);

    //  document.querySelector('#myDiv').addEventListener('scroll', () => {
    //   console.log('scroll event fired!')
    //   });


    // window.addEventListener('scroll', changeCircleBg);
    // return () => {
    //   window.removeEventListener('scroll', changeCircleBg);
    // }

          // const AppWrapper = document.getElementById('app-content');
          // AppWrapper.addEventListener('scroll', toggleVisibility);

          // marginDot3.addEventListener('scroll', page3)
  }, [])

          // const AppWrapper = document.getElementById('app-content');
          // AppWrapper.addEventListener('scroll', toggleVisibility);


          
  

  // const scroller = document.querySelector('.scroller');
  // const circles = document.querySelector('.circles');

  // scroller.addEventListener('scroll', (event) => {
  //   if (scroller.scrollTop >= 1000 && scroller.scrollTop < 2000) {
  //     circles.backgroundColor = '#ffff00'
  //   } else if (scroller.scrollTop >= 2000 && scroller.scrollTop < 3000) {
  //     circles.backgroundColor = '#00ff00'
  //   } else if (scroller.scrollTop >= 3000 && scroller.scrollTop < 4000) {
  //     circles.backgroundColor = '#00ffff'
  //   } else if (scroller.scrollTop >= 4000 && scroller.scrollTop < 5000) {
  //     circles.backgroundColor = '#0000ff'
  //   } else {
  //     circles.backgroundColor = '#ff0000'
  //   }
  // })

  // const back = document.querySelector('.back')

  // back.addEventListener('scroll', (event) => {
  //   if (back.scrollTop >= 1000 && back.scrollTop < 2000) {
  //     back.style.backgroundColor = '#ffff00'
  //   } else if (back.scrollTop >= 2000 && back.scrollTop < 3000) {
  //     back.style.backgroundColor = '#00ff00'
  //   } else if (back.scrollTop >= 3000 && back.scrollTop < 4000) {
  //     back.style.backgroundColor = '#00ffff'
  //   } else if (back.scrollTop >= 4000 && back.scrollTop < 5000) {
  //     back.style.backgroundColor = '#0000ff'
  //   } else {
  //     back.style.backgroundColor = '#ff0000'

  //   }
  // })

  // const Dot1 = document.getElementById('dot1');
  // const Dot2 = document.getElementById('dot2');
  // const Dot3 = document.getElementById('dot3');
  // const Dot4 = document.getElementById('dot4');
  // const Dot5 = document.getElementById('dot5');
  // const Dot6 = document.getElementById('dot6');

  // const marginDot1 = document.getElementById('IdOne'); 
  // const marginDot2 = document.getElementById('IdTwo'); 
  // const marginDot3 = document.getElementById('IdThree'); 
  // const marginDot4 = document.getElementById('IdFour'); 
  // const marginDot5 = document.getElementById('IdFive'); 
  // const marginDot6 = document.getElementById('IdSix'); 


  const scrollToMarginPage1 = () => {
    const marginDot1 = document.getElementById('IdOne'); 
      if (marginDot1) {
        marginDot1.scrollIntoView();
        
        // setBackgroundDot.dot1("red");
        setActiveDot(() => {
          return { dot1: true, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage2 = () => {
    const marginDot2 = document.getElementById('IdTwo'); 
      if (marginDot2) {
        marginDot2.scrollIntoView();
        
        setActiveDot(() => {
            return { dot1: false, dot2: true, dot3: false, dot4:false, dot5:false, dot6:false }
          });
        
          // backgroundDot1.backgroundColor();
          // sara = backgroundDot2.backgroundColor;
      }
  };


  const scrollToMarginPage3 = () => {
    const marginDot3 = document.getElementById('IdThree'); 
      if (marginDot3) {
        marginDot3.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: true, dot4:false, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage4 = () => {
    const marginDot4 = document.getElementById('IdFour'); 
      if (marginDot4) {
        marginDot4.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:true, dot5:false, dot6:false }
        });
      }
  };

  const scrollToMarginPage5 = () => {
    const marginDot5 = document.getElementById('IdFive'); 
      if (marginDot5) {
        marginDot5.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:true, dot6:false }
        });
      }
  };

  const scrollToMarginPage6 = () => {
    const marginDot6 = document.getElementById('IdSix'); 
      if (marginDot6) {
        marginDot6.scrollIntoView();
         
        setActiveDot(() => {
          return { dot1: false, dot2: false, dot3: false, dot4:false, dot5:false, dot6:true }
        });
      }
  };

  // می خواهیم بررسی کنیم اگر در صفحه اول هست کلاس نیم جدید داشته باشن دایره زردا در غیر این صورت سیرکل اجرا بشه
  // const specialPageOne = () => {
  //   if (marginDot1){}
  // };

  // const listenScrollEvent = () => {
  //   window.scrollY > 10
  //     ? setHeaderColor("black")
  //     : setHeaderColor("white")
  // }
// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   window.addEventListener("scroll", listenScrollEvent)
// })

  // const listenScrollEvent = () => {
  //   if (window.scrollY >= 0 && window.scrollY <= 100) {
  //     alert("1");
  //     // Dot1.backgroundColor = 'red';
  //   }
  //   else if (window.scrollY >= 101 && window.scrollY <= 200) {
  //     alert("2");
  //     // Dot2.backgroundColor = 'red';
  //   }
  //   else if (window.scrollY >= 201 && window.scrollY <= 300) {
  //     alert("3");
  //     // Dot3.backgroundColor = 'red';
  //   }

  //   // if (window.scrollY > '100vh')
  //   // if (window.scrollY > '200vh')
  //   // if (window.scrollY > '300vh')
  // }
  // useEffect(() => {
  //     window.addEventListener("scroll", listenScrollEvent)
  //   },[])

  // const scrollKard = () => {
  //   if(marginDot1){
  //   setActiveDot(() => {
  //     return { dot1: true, dot2: false, dot3: false, dot4:false, dot5:false, dot6:false }
  //   });
  // }
  // if(marginDot2){
  //   setActiveDot(() => {
  //     return { dot1: false, dot2: true, dot3: false, dot4:false, dot5:false, dot6:false }
  //   });
  // }
  // if(marginDot3){
  //   setActiveDot(() => {
  //     return { dot1: false, dot2: false, dot3: true, dot4:false, dot5:false, dot6:false }
  //   });
  // }
  // }
  
//  useEffect(() => {
//   const marginDot6 = document.getElementById('IdSix'); 

//       if(marginDot6){alert('man p6 hastam');}
// })


  return (
    <div>
      <div>    
        <div id="dot1" className='circle dot1' onClick={scrollToMarginPage1} style={{backgroundColor: activeDot.dot1? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot2" className='circle dot2' onClick={scrollToMarginPage2} style={{backgroundColor: activeDot.dot2? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot3" className='circle dot3' onClick={scrollToMarginPage3} style={{backgroundColor: activeDot.dot3? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot4" className='circle dot4' onClick={scrollToMarginPage4} style={{backgroundColor: activeDot.dot4? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot5" className='circle dot5' onClick={scrollToMarginPage5} style={{backgroundColor: activeDot.dot5? 'rgba(8,46,108,0.85)' : 'gold' }}/>
        <div id="dot6" className='circle dot6' onClick={scrollToMarginPage6} style={{backgroundColor: activeDot.dot6? 'rgba(8,46,108,0.85)' : 'gold' }} />
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
      {/* <div>{scroller.scrollTop}</div> */}

      {/* <div style={{position:"sticky", color:'red'}}>{window.scrollIntoView}</div> */}

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
