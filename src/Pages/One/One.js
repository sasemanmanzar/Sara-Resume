import sky from './sky.png';
import './One.css'
// import Two from './Two/Two'

function One(){

    // const shoot = () => {
    //     alert("Great Shot!");
    //   }

    return(
        <>
        <img src={sky} />
        <div className='circle'></div>

        {/* <img src={sky} usemap='#circleMap'/>
        <div style={{backgroundColor:'red'}}>ss</div>
        <map name='circleMap'>
            <area shape='circle' onClick={shoot} coords="337,300,404" style={{color: 'red'}} />
        </map> */}
        
        </>
    );
}

export default One;