import './Five.css';
import iconBluePencil from '../../Pic/iconBluePencil.gif';

function Five({ text, langNow, pageRef }) {

    const Text = text.Experience;

    return (
        <div id='IdFive' className='five' ref={pageRef}>
            <div className='boxPage5'>
                <div className={langNow}>
                    <div className='smallBoxExp'><div>{text.main.titleExperience}</div></div>
                    <div className='boxExp'>
                        <div className='boxPicText5'>
                            <div className="TitelBP">{Text.bulePencil.title}</div>
                            <img className='picIconBluePencil' src={iconBluePencil} alt="" />
                        </div>

                        <div className="textBP1">{Text.bulePencil.text1}</div>
                        <div className="textBP1 italicBP">{Text.bulePencil.text2}</div>
                        <div className="textBP2">{Text.bulePencil.text3}</div>
                        <div className="textBP2">{Text.bulePencil.text4}</div>
                        <div className="textBP2">
                            <ul>
                                <li><div>{Text.bulePencil.text5}</div></li>
                                <li><div>{Text.bulePencil.text6}</div></li>
                                <li><div>{Text.bulePencil.text7}</div></li>
                                <li><div>{Text.bulePencil.text8}</div></li>
                                <li><div>{Text.bulePencil.text9}</div></li>
                                <li><div>{Text.bulePencil.text10}</div></li>
                            </ul>
                        </div>
                        <div className="textBP3">{Text.bulePencil.text11}</div>
                        <div className="textBP3">{Text.bulePencil.text12}</div>
                        <div className='boxLinkDownload'>
                            <div className="LinkDownload"><a href="https://cafebazaar.ir/app/com.example.BluePencil" target="_blank" rel="noreferrer">{Text.bulePencil.text13}</a></div>
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
        </div>
    );
}

export default Five;