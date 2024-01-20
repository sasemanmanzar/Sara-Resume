// import sky from '../../Pic/sky.png';
// import Two from '../Two/Two'
// import { useCallback } from 'react';

import './One.css'
import picSara from '../../Pic/sara2.jpg'

function One(){

    // const button = () => {
    //     alert("Hi!");
    // }

    return(
        <div id='IdOne' className='one'>
             <img className='picSara' src={picSara} alt="" />
             {/* <div className='textOne'>سارا آسمان منظر</div> */}
             
             {/* <div className='circleOne'></div> */}
             <div className='circlePageOne'></div>
             <div className='circlePageOne'></div>
             <div className='circlePageOne'></div>
             <div className='circlePageOne'></div>
             <div className='circlePageOne'></div>

        </div>
    );
}

export default One;