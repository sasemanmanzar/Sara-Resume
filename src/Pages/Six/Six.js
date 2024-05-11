import './Six.css';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
// import { useRef } from 'react';

function Six({ text, langNow, pageRef }) {

  const Text = text.Contact;

  // console.log(langNow);
  // console.log(Text.name);

  // const [InfoSendEmail, SetInfo] = useState({
  // Name: "نام",
  // Email: "ایمیل",
  // Title: "موضوع",
  // Text: "متن پیام"
  // });

  const [InfoSendEmail, SetInfo] = useState({
    Name: Text.name,
    Email: Text.email,
    Title: Text.subject,
    Text: Text.text
  });

  useEffect(() => {
    SetInfo({
      Name: Text.name,
      Email: Text.email,
      Title: Text.subject,
      Text: Text.text
    });
  }, [langNow]);

  // console.log(InfoSendEmail);

  const updateInfoSendName = (e) => {
    SetInfo((previousState) => {
      return { ...previousState, Name: e.target.value }
    });
  };

  const updateInfoSendEmail = (e) => {
    SetInfo((previousState) => {
      return { ...previousState, Email: e.target.value }
    });
  }

  const updateInfoSendTitle = (e) => {
    SetInfo((previousState) => {
      return { ...previousState, Title: e.target.value }
    });
  };

  const updateInfoSendText = (e) => {
    SetInfo((previousState) => {
      return { ...previousState, Text: e.target.value }
    });
  }

  // const cancelCourse = () => { 
  //   document.getElementById("create-form").reset();
  // }

  // function sendEmail(e) {
  //     e.preventDefault();  //This is important, i'm not sure why, but the email won't send without it

  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //       .then((result) => {
  //           window.location.reload();  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
  //           alert("ok");
  //       }, (error) => {
  //           console.log(error.text);
  //           alert("badi");
  //       });

  //     //   alert("hi");
  //   }

  //Send Email:
  const [isBoxAlert, setBoxAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_j56d6jg",
        "template_rhny40k",
        e.target,
        "zwWGq0AksnbQJwxz9"
      )
      .then(
        (result) => {
          //   setStateMessage('Message sent!');
          // پیام شما ارسال شد
          // alert('پیام شما ارسال شد');
          setBoxAlert(true);
          // setStateMessage('پیام شما با موفقیت ارسال شد. متشکرم');
          setStateMessage(Text.alert_good);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
            setBoxAlert(false);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          //   setStateMessage('Something went wrong, please try again later');
          // alert('خطایی رخ داده است. لطفا دوباره تلاش کنید');
          setBoxAlert(true);
          // setStateMessage('خطایی رخ داده است. لطفا دوباره تلاش کنید');
          setStateMessage(Text.alert_bad);
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
            setBoxAlert(false);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();

    // InfoSendEmail.Name = "نام";
    // InfoSendEmail.Email = "ایمیل";
    // InfoSendEmail.Title = "موضوع";
    // InfoSendEmail.Text = "متن پیام";

    InfoSendEmail.Name = Text.name;
    InfoSendEmail.Email = Text.email;
    InfoSendEmail.Title = Text.subject;
    InfoSendEmail.Text = Text.text;
  };

  return (
    <div id='IdSix' className='six' ref={pageRef}>
      <div className='boxPage6'>
        <div className={langNow}>
          <div className='smallBoxCallMe'><div>{text.main.titleContact}</div></div>

          <div className='boxAlert' style={{ display: isBoxAlert ? 'grid' : 'none' }}>{stateMessage}</div>

          <div className='boxForm'>
            <div className='boxFormInside'>
              <form action='' id="create-form" onSubmit={sendEmail}>
                <div className='NameEmailP6'>
                  <div className='NameP6'><input type="text" name="NameP6" defaultValue="" placeholder={InfoSendEmail.Name} onChange={updateInfoSendName} /></div>
                  <div className='EmailP6'><input type="email" name="EmailP6" defaultValue="" placeholder={InfoSendEmail.Email} onChange={updateInfoSendEmail} /></div>
                </div>
                <div className='TitleP6'><input type="text" name="TitleP6" defaultValue="" placeholder={InfoSendEmail.Title} onChange={updateInfoSendTitle} /></div>
                <div className='TextP6'><textarea type="text" name="TextP6" defaultValue="" placeholder={InfoSendEmail.Text} onChange={updateInfoSendText} /></div>
                <div className='SubmitP6'><input type="submit" name="SubmitP6" value={Text.send} disabled={isSubmitting} /></div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bbbbb'> 
                {InfoSendEmail.Name} <br/> {InfoSendEmail.Email} <br/> {InfoSendEmail.Title} <br/> {InfoSendEmail.Text} <br/>

                <br/>
                {stateMessage} 
                <br/>
            </div> */}
    </div>
  );
}

export default Six;


//silver_moon:
// process.env.REACT_APP_SERVICE_ID = "service_y8ycm1s";
// process.env.REACT_APP_TEMPLATE_ID = "template_3gx9e0d";
// process.env.REACT_APP_PUBLIC_KEY = "9U64idXn07ZppBH-Q";

//s.am@gmail:
// .sendForm(
//     "service_qd0n7rq",
//     "template_7f8yxne",
//     e.target,
//     "H_fCnKXEmTQla3tEH"
//   )