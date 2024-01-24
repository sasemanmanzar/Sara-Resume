import './Two.css'

function Two(){

    return(
        <div id='IdTwo' className='two'>
            <div className='smallBox1 top1'><p>سوابق تحصیلی</p></div>
            <div className='smallBox top2'><p>کارشناسی ارشد</p></div>
            <div className='box top3'>
                <p>
                    <p style={{fontWeight:'bold'}}>مهندسی فناوری اطلاعات گرایش مدیریت سیستم های اطلاعاتی</p>
                    <p>موسسه آموزش عالی فناوری اطلاعات تعالی، قم ۱۳۹۴</p>
                    <p>پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی - مورد واکاوی: مرکز شنوایی سنجی</p>
                    <p>استاد راهنما: جناب آقای دکتر رضا احسن</p>
                </p>
            </div>
            <div className='smallBox top4'><p>کارشناسی</p></div>
            <div className='box top5'>
                    <p style={{fontWeight:'bold'}}>مهندسی فناوری اطلاعات</p>
                    <p>دانشگاه صنعتی خواجه نصیر الدین طوسی، تهران ۱۳۹۱</p>
                    <p>رتبه اول فارغ التحصیلان دوره کارشناسی رشته مهندسی فناوری اطلاعات</p>
                    <p>پروژه پایانی: مدارس و دانشگاه های هوشمند</p>
                    <p>استاد راهنما: جناب آقای دکتر اصغر زمانی</p>
            </div>

        </div>
    );
}

export default Two;