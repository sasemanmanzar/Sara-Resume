import sky from './sky.png';
import './One.css'
// import Two from './Two/Two'

function One(){

    const shoot = () => {
        alert("Great Shot!");
      }

    return(
        <>
        <div className='circle'></div>
        <img src={sky} usemap='#circleMap'/>
        <div style={{backgroundColor:'red'}}>ss</div>
        <map name='circleMap'>
            <area shape='circle' onClick={shoot} coords="337,300,404" style={{color: 'red'}} />
        </map>
        
        {/* <img  alt="Workplace" usemap="#workmap" width="400" height="379"/>

        <map name="workmap">
        <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
        <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
        <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
        <map /> */}

        {/* 
        <img src={physicalimage} id="physicalimage" usemap="#image-map"/>
            <map name="image-map">
            <area target="" onClick={this.consoleMessage("bpleft")} alt="bpleft" title="bpleft"  coords="223,201,269,254" shape="rect" />
            <area target="" onClick={this.consoleMessage("bpright")} alt="bpright" title="bpright" coords="60,199,101,259" shape="rect" />
            <area target="" onClick={this.consoleMessage("heart")} alt="heartrate"  title="heartrate" coords="169,124,219,183" shape="rect" />
            </map>
        */}


        </>
    );
}

export default One;