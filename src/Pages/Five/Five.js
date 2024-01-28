import './Five.css';
import iconBluePencil from '../../Pic/iconBluePencil.gif';

function Five(){

    return(
        <div id='IdFive' className='five'>
            <div className='smallBoxExp topExp1'><p>تجارب</p></div>

            {/* <img className='picIconBluePencil' src={iconBluePencil} alt="" /> */}
            <div className='boxExp topExp2'>
                <img className='picIconBluePencil' src={iconBluePencil} alt="" />
                <p id="TitelBP">برنامه نقاشی مداد آبی</p>
                <p id="TextBP1">برنامه نقاشی مداد آبی، زبان پروژه اندروید، منتشرشده در کافه بازار</p>
                <p id="TextBP2">تعداد نصب +۳۰۰۰</p>
                {/* <p id="TextBP3">برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است. این برنامه شامل نقاشی، رنگ آمیزی تصاویر، وصل کردن نقطه چین ها و امکاناتی از قبیل ذخیره تصاویر و پرداخت درون برنامه ای است</p> */}
                
                <p id="TextBP3">برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است</p>
                <p id="TextBP03"> این برنامه شامل نقاشی، رنگ آمیزی تصاویر، وصل کردن نقطه چین ها و امکاناتی از قبیل ذخیره تصاویر و پرداخت درون برنامه ای است</p>
                
                {/* <p>'&diams' &#9830</p> */}
                {/* <ul>ww</ul> */}
                <p id="TextBP4">آخرین به روز رسانی، انتشار نسخه دو و دو در تاریخ ۹ تیر ۱۳۹۹</p>
                <p id="TextBP5">انتشار نسخه دو و یک در تاریخ ۱۲ خرداد ۱۳۹۹</p>
                <p id="TextBP6">انتشار نسخه یک در تاریخ ۱۶ دی ۱۳۹۸</p>
                <p id="LinkDownload"><a href="https://cafebazaar.ir/app/com.example.BluePencil" target="_blank" rel="noreferrer">دانلود از کافه بازار</a></p>
                {/* <hr/> */}
            </div>
        </div>
    );
}

export default Five;