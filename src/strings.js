const strings = {
    en: {
        main: {
            myName: "Sara Aseman-Manzar",
            titleEducation:"EDUCATION",
            titlePublication:"PUBLICATION",
            titleSkills:"SKILLS",
            titleExperience:"EXPERIENCE",
            titleContact:"CONTACT"
        },
        Education:{
            BSc: {
                degree: "BSc.",
                fieldOfStudy: "Information Technology Engineering",
                university: "K. N. Toosi University of Technology, Tehran, Iran, 2012",
                project: "Smart School & University",
                prise: "The First Rank of Graduates in the Bachelor Course in IT Engineering"
            },
            MSc: {
                degree: "MSc.",
                // fieldOfStudy: "Information Technology Engineering, Management Information Systems",
                fieldOfStudy: "Information Technology Engineering",
                fieldOfStudyPart2: "Management Information Systems",
                university: "Taali Higher Education Information Technology Institute, Gom, Iran, 2015",
                project: "Designing Medicine Decision Assistant System to Increase Accuracy by Data Mining Techniques (Case Study: Audiology)",
            }
        },
        Publication:{
            p1: {
                title:" Customer Relationship Management and its Implementation of an Organization (in Persian)",
                conference:"National e-Conference on Advances in Basic Sciences and Engineering",
            },
            p2: {
                title:"Analysis and Improving the Software Testing Process based on the Mutation Test (in Persian)",
                conference:"The First National Conference on Meta-Heuristic Algorithms and their Applications in Science and Engineering", 
            },
            p3: {
                title:"Successful Implement of Requirements Engineering with the Best Available Tools then Comparing and evaluating them with Existing Criteria (in Persian)",
                conference:"National e-Conference on Advances in Basic Sciences and Engineering",
            },
            p4: {
                title:"Classification of Data Pre-Processing Solutions in Data Mining and Knowledge Discovery (in Persian)",
                conference:"7th Iranian & 1st International Knowledge Management Conference", 
            },
            p5: {
                title:"Introducing the most Effective Principles of Software Testing and evaluating the Logical Coverage Criteria for Seasonal Normal Functions (in Persian)",
                conference:"The Second National Conference on New Technologies in Electrical and Computer Engineering",
            },
            p6: {
                title:" Expression and Extraction Security Requirements are using the Best Methods(in Persian)",
                conference:"National e-Conference on Advances in Basic Sciences and Engineering", 
            },
            p7: {
                title:"Analysis Data Mining Process and Classification Solutions for Solving Problems in Data Per-Process Step (in Persian)",
                conference:"International Conference on Research in Engineering, Science and Technology",
            },
            p8: {
                title:"Designing a Platform to Analyze Games’ Users’ Data and Classification of Essential Metrics (in Persian)",
                conference:"1st Digital Games Research Conference (DGRC)", 
            }
        },
        Skills:{
        },
        Experience:{
            bulePencil: {
                title: "BLUE PENCIL GAME",
                text1: "BLUE PENCIL GAME FOR ANDROID, PUBLISHED IN CAFE BAZAAR (PERSIAN APP)",
                text2: "INSTALL +2K",
                text3: "A Painting App for Children with Creative and Attractive Features.",
                text4: "This Program includes:",
                text5: "Drawing",
                text6: "Coloring Pictures",
                text7: "Gif Pictures",
                text8: "Connecting the Dots",
                text9: "Saving Pictures",
                text10: "In-app Payments",
                text11: "PUBLISHED IN CAFE BAZAAR (PERSIAN APP), TEHRAN, IRAN — 2019-2020",
                text12: "",
                text13: "Download",
                // text16: "
                //     ANDROID DEVELOPER, SELF-EMPLOYED; TEHRAN, IRAN — 2019-2020
                //     BLUE PENCIL GAME FOR ANDROID, PUBLISHED IN CAFE BAZAAR (PERSIAN APP)
                //     INSTALL +3K
                //     A Painting App for Children with Creative and Attractive Features. This Program
                //     includes Drawing, Coloring Pictures, Connecting the Dots and Features such as Saving
                //     Pictures and In-app Payments.
                //     https://cafebazaar.ir/app/com.example.BluePencil?l=en
                // ",
            }
        },
        Contact:{
            name: "name",
            email: "email",
            subject: "subject",
            text: "text",
            send: "Send"
        }
    }, 
    fa: {
        main: {
            myName: "سارا آسمان منظر",
            titleEducation:"تحصیلات",
            titlePublication:"مقالات",
            titleSkills:"مهارت ها",
            titleExperience:"تجارب",
            titleContact:"راه ارتباطی",
        },
        Education:{
            BSc: {
                degree: "کارشناسی",
                fieldOfStudy: "مهندسی فناوری اطلاعات",
                university: "دانشگاه صنعتی خواجه نصیر الدین طوسی، تهران ۱۳۹۱",
                project: "پروژه پایانی: مدارس و دانشگاه های هوشمند",
                prise: "رتبه اول فارغ التحصیلان دوره کارشناسی رشته مهندسی فناوری اطلاعات"
            },
            MSc: {
                degree: "کارشناسی ارشد",
                // fieldOfStudy: "مهندسی فناوری اطلاعات گرایش مدیریت سیستم های اطلاعاتی",
                fieldOfStudy: "مهندسی فناوری اطلاعات",
                fieldOfStudyPart2: "گرایش مدیریت سیستم های اطلاعاتی",
                // university: "موسسه آموزش عالی فناوری اطلاعات تعالی، قم ۱۳۹۴",
                university: "دانشگاه فناوری اطلاعات تعالی، قم ۱۳۹۴",
                // project: "پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی (مورد واکاوی: مرکز شنوایی سنجی) / استاد راهنما: جناب آقای دکتر رضا احسن",
                project: "پروژه پایانی: طراحی سیستم تصمیم یار پزشکی به منظور افزایش دقت با استفاده از تکنیک‌های داده کاوی (مورد واکاوی: مرکز شنوایی سنجی)",
            }
        },
        Publication:{ 
            p1: {
                title:"مدیریت ارتباط با مشتری و پیاده سازی آن در سازمان",
                conference:"همایش ملی الکترونیکی دستاوردهای نوین در علوم مهندسی و پایه",
            },
            p2: {
                title:"بررسی و بهبود فرآیند تست نرم افزار براساس آزمون جهش",
                conference:"اولين کنفرانس ملّي الگوريتم‌هاي فراابتکاري و کاربردهاي آن در علوم و مهندسی", 
            },
            p3: {
                title:"اجرای موفق مهندسی نیازمندی ها با بهترین ابزارهای مطرح و مقایسه و ارزیابی آنها با معیارهای موجود",
                conference:"همایش ملی الکترونیکی دستاوردهای نوین در علوم مهندسی و پایه",
            },
            p4: {
                title:"طبقه بندی راهکارهای پیش پردازش داده در داده کاوی و کشف دانش",
                conference:"هفتمین کنفرانس ملی و اولین کنفرانس بین المللی مدیریت دانش", 
            },
            p5: {
                title:"معرفی موثرترین اصول تست نرم افزار و ارزیابی معیار هاي پوشش منطقی براي توابع عادي فصلی",
                conference:"دومین همایش ملی فناوری های نوین در مهندسی برق و کامپیوتر",
            },
            p6: {
                title:"بیان و استخراج نیازمندی های امنیتی با استفاده از بهترین روش های موجود",
                conference:"همایش ملی الکترونیکی دستاوردهای نوین در علوم مهندسی و پایه", 
            },
            p7: {
                title:"بررسی فرآیند داده کاوی و طبقه بندی راهکارهای حل مشکلات در مرحله پیش پردازش داده ها",
                conference:"کنفرانس بین المللی پژوهش در مهندسی، علوم و تکنولوژی",
            },
            p8: {
                title:"طراحی بستر نرم افزاری تحلیل داده کاربران در بازی ها و طبقه بندی شاخص های ضروری",
                conference:"کنفرانس تحقیقات بازی های دیجیتال، گرایش ها، فناوری ها و کاربرد ها", 
            }
        },
        Skills:{
        },
        Experience:{
            bulePencil: {
                title: "برنامه نقاشی مداد آبی",
                text1: "برنامه نقاشی مداد آبی، زبان پروژه اندروید، منتشرشده در کافه بازار",
                text2: "تعداد نصب ۲۰۰۰+",
                text3: "برنامه نقاشی مخصوص کودکان که دارای ویژگی های خلاقانه و جذاب است",
                text4: "امکانات برنامه:",
                text5: "نقاشی",
                text6: "رنگ آمیزی تصاویر",
                text7: "تصاویر کارتونی متحرک",
                text8: "وصل کردن نقطه چین ها",
                text9: "ذخیره تصاویر",
                text10: "پرداخت درون برنامه ای",
                text11: "تاریخ انتشار دی ۱۳۹۸",
                text12: "آخرین بروزرسانی تیر ۱۳۹۹",
                text13: "دانلود از کافه بازار",
            }
        },
        Contact:{
            name: "نام",
            email: "ایمیل",
            subject: "موضوع",
            text: "متن پیام",
            send: "ارسال"
        }
    }
}

export default strings;
