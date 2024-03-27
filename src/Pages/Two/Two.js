import './Two.css';
// import React, { useState, useEffect } from 'react';


function Two(){

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



    return(
        <div id='IdTwo' className='two'>
            {/* <div style={{color:"red"}}>{width} <br/> {height} </div> */}
            <div className='boxPage2'>
            <div className='smallBox1'><div>سوابق تحصیلی</div></div>
            <div className='smallBox'><div>کارشناسی ارشد</div></div>
            <div className='box'>
                <div>
                    <div id='subject'>مهندسی فناوری اطلاعات گرایش مدیریت سیستم های اطلاعاتی</div>
                    <div id='university'>موسسه آموزش عالی فناوری اطلاعات تعالی، قم ۱۳۹۴</div>
                    {/* <p id='project'>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی - مورد واکاوی: مرکز شنوایی سنجی</p>
                    <p>استاد راهنما: جناب آقای دکتر رضا احسن</p> */}
                    <div id='project'>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی (مورد واکاوی: مرکز شنوایی سنجی) / استاد راهنما: جناب آقای دکتر رضا احسن</div>
                </div>
            </div>
            <div className='smallBox'><div>کارشناسی</div></div>
            <div className='box'>
                <div>
                    <div id='subject'>مهندسی فناوری اطلاعات</div>
                    <div id='university'>دانشگاه صنعتی خواجه نصیر الدین طوسی، تهران ۱۳۹۱</div>
                    <div id='prise'>رتبه اول فارغ التحصیلان دوره کارشناسی رشته مهندسی فناوری اطلاعات</div>
                    <div id='project'>پروژه پایانی: مدارس و دانشگاه های هوشمند / استاد راهنما: جناب آقای دکتر اصغر زمانی</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Two;