import './Two.css';
// import React, { useState, useEffect } from 'react';


function Two({ text, pageRef }){

        // const [width, setWidth]   = useState(window.innerWidth);
        // const [height, setHeight] = useState(window.innerHeight);
        
        // const updateDimensions = () => {
        //     setWidth(window.innerWidth);
        //     setHeight(window.innerHeight);
        // }

        // useEffect(() => {
        //     window.addEventListener("resize", updateDimensions);
        //     return () => window.removeEventListener("resize", updateDimensions);
        // }, []);
       
        const Text = text.Education;


    return(
        <div id='IdTwo' className='two' ref={pageRef}>
            {/* <div style={{color:"red"}}>{width} <br/> {height} </div> */}
            <div className='boxPage2'>
            <div className='smallBox1'><div>{text.main.titleEducation}</div></div>
            <div className='smallBox'><div>{Text.MSc.degree}</div></div>
            <div className='box'>
                <div>
                    <div id='subject'>{Text.MSc.fieldOfStudy}</div>
                    <div id='university'>{Text.MSc.university}</div>
                    {/* <p id='project'>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی - مورد واکاوی: مرکز شنوایی سنجی</p>
                    <p>استاد راهنما: جناب آقای دکتر رضا احسن</p> */}
                    <div id='project'>{Text.MSc.project}</div>
                </div>
            </div>
            <div className='smallBox'><div>{Text.BSc.degree}</div></div>
            <div className='box'>
                <div>
                    <div id='subject'>{Text.BSc.fieldOfStudy}</div>
                    <div id='university'>{Text.BSc.university}</div>
                    <div id='prise'>{Text.BSc.prise}</div>
                    <div id='project'>{Text.BSc.project}</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Two;