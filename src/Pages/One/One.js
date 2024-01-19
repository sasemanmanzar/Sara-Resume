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
        <>
        <div id='IdOne' className='one'>
             <img className='picSara' src={picSara} />
             <div className='textOne'>سارا آسمان منظر</div>
             
             <div className='circelOne'></div>        
        </div>
        
        </>
    );
}

export default One;