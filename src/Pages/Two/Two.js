import './Two.css';
import React, { useState, useEffect } from 'react';


function Two(){

        const [width, setWidth]   = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);
        
        const updateDimensions = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        useEffect(() => {
            window.addEventListener("resize", updateDimensions);
            return () => window.removeEventListener("resize", updateDimensions);
        }, []);



    return(
        <div id='IdTwo' className='two'>
            {/* <div style={{color:"red"}}>{width} <br/> {height} </div> */}
            <div className='boxPage2'>
            <div className='smallBox1 top1'><p>سوابق تحصیلی</p></div>
            <div className='smallBox top2'><p>کارشناسی ارشد</p></div>
            <div className='box top3'>
                <p>
                    <p id='subject'>مهندسی فناوری اطلاعات گرایش مدیریت سیستم های اطلاعاتی</p>
                    <p id='university'>موسسه آموزش عالی فناوری اطلاعات تعالی، قم ۱۳۹۴</p>
                    {/* <p id='project'>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی - مورد واکاوی: مرکز شنوایی سنجی</p>
                    <p>استاد راهنما: جناب آقای دکتر رضا احسن</p> */}
                    <p id='project'>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی (مورد واکاوی: مرکز شنوایی سنجی) / استاد راهنما: جناب آقای دکتر رضا احسن</p>
                </p>
            </div>
            <div className='smallBox top4'><p>کارشناسی</p></div>
            <div className='box top5'>
                    <p id='subject'>مهندسی فناوری اطلاعات</p>
                    <p id='university'>دانشگاه صنعتی خواجه نصیر الدین طوسی، تهران ۱۳۹۱</p>
                    <p id='prise'>رتبه اول فارغ التحصیلان دوره کارشناسی رشته مهندسی فناوری اطلاعات</p>
                    <p id='project'>پروژه پایانی: مدارس و دانشگاه های هوشمند / استاد راهنما: جناب آقای دکتر اصغر زمانی</p>
            </div>
            </div>
        </div>
    );
}

export default Two;