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
             <div className='textPageOne'>سارا آسمان منظر</div>
             
             <div className='circlePageOne circlePageOne1'><p>تماس با ما</p></div>
             <div className='circlePageOne circlePageOne2'><p>تجارب</p></div>
             <div className='circlePageOne circlePageOne3'><p>مهارت ها</p></div>
             <div className='circlePageOne circlePageOne4'><p>مقالات</p></div>
             <div className='circlePageOne circlePageOne5'><p>سوابق تحصیلی</p></div>

        </div>
    );
}

export default One;