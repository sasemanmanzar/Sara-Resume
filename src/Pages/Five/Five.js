import './Five.css';
import iconBluePencil from '../../Pic/iconBluePencil.gif';

function Five({ pageRef }){

    return(
        <div id='IdFive' className='five' ref={pageRef}>
            <div className='boxPage5'>
            <div className='smallBoxExp'><div>تجارب</div></div>
                <div className='boxExp'>
                    <div className='boxPicText5'>
                        <div className="TitelBP">برنامه نقاشی مداد آبی</div>
                        <img className='picIconBluePencil' src={iconBluePencil} alt="" />
                    </div>
                    
                    <div className="textBP1">برنامه نقاشی مداد آبی، زبان پروژه اندروید، منتشرشده در کافه بازار</div>
                    <div className="textBP1 italicBP">تعداد نصب +۲۰۰۰</div>
                    <div className="textBP2">برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است</div>
                    <div className="textBP2">امکانات برنامه:</div>
                    <div className="textBP2">
                    <ul>
                        <li><div>نقاشی</div></li>
                        <li><div>رنگ آمیزی تصاویر</div></li>
                        <li><div>تصاویر کارتونی متحرک</div></li>
                        <li><div>وصل کردن نقطه چین ها</div></li>
                        <li><div>ذخیره تصاویر</div></li>
                        <li><div> پرداخت درون برنامه ای</div></li>
                    </ul>
                    </div>
                    <div className="textBP3">تاریخ انتشار دی ۱۳۹۸</div>
                    <div className="textBP3">آخرین بروزرسانی تیر ۱۳۹۹</div>
                    <div className='boxLinkDownload'>
                        <div className="LinkDownload"><a href="https://cafebazaar.ir/app/com.example.BluePencil" target="_blank" rel="noreferrer">دانلود از کافه بازار</a></div>
                    </div>
                    {/* <div className="LinkDownload"><a href="https://cafebazaar.ir/app/com.example.BluePencil" target="_blank" rel="noreferrer">دانلود از کافه بازار</a></div> */}
                </div>
            </div>

            {/* <div className='boxExp topExp2'>
                <img className='picIconBluePencil' src={iconBluePencil} alt="" />
                <p id="TitelBP">برنامه نقاشی مداد آبی</p>
                <p id="TextBP1">برنامه نقاشی مداد آبی، زبان پروژه اندروید، منتشرشده در کافه بازار</p>
                <p id="TextBP2">تعداد نصب +۲۰۰۰</p>
                <p id="TextBP3">برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است</p>
                <p id="TextBP03"> این برنامه شامل نقاشی، رنگ آمیزی تصاویر، وصل کردن نقطه چین ها و امکاناتی از قبیل ذخیره تصاویر و پرداخت درون برنامه ای است</p>
                <p id="TextBP4">آخرین به روز رسانی، انتشار نسخه دو و دو در تاریخ ۹ تیر ۱۳۹۹</p>
                <p id="TextBP5">انتشار نسخه دو و یک در تاریخ ۱۲ خرداد ۱۳۹۹</p>
                <p id="TextBP6">انتشار نسخه یک در تاریخ ۱۶ دی ۱۳۹۸</p>
                <p id="LinkDownload"><a href="https://cafebazaar.ir/app/com.example.BluePencil" target="_blank" rel="noreferrer">دانلود از کافه بازار</a></p> */}
                
                {/* <hr/> */}
                {/* <p id="TextBP3">برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است. این برنامه شامل نقاشی، رنگ آمیزی تصاویر، وصل کردن نقطه چین ها و امکاناتی از قبیل ذخیره تصاویر و پرداخت درون برنامه ای است</p> */}
                {/* <p>'&diams' &#9830</p> */}
                {/* <ul>ww</ul> */}

            {/* </div> */}
        </div>
    );
}

export default Five;