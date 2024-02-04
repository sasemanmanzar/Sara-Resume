import './Six.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Six(){
    
        const [InfoSendEmail, SetInfo] = useState({
        Name: "نام",
        Email: "ایمیل",
        Title: "موضوع",
        Text: "متن پیام"
        });

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
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [stateMessage, setStateMessage] = useState(null);
        const sendEmail = (e) => {
            e.persist();
            e.preventDefault();
            setIsSubmitting(true);
            emailjs
              .sendForm(
                "service_qd0n7rq",
                "template_7f8yxne",
                e.target,
                "H_fCnKXEmTQla3tEH"
              )
              .then(
                (result) => {
                  setStateMessage('Message sent!');
                  setIsSubmitting(false);
                  setTimeout(() => {
                    setStateMessage(null);
                  }, 5000); // hide message after 5 seconds
                },
                (error) => {
                  setStateMessage('Something went wrong, please try again later');
                  setIsSubmitting(false);
                  setTimeout(() => {
                    setStateMessage(null);
                  }, 5000); // hide message after 5 seconds
                }
              );
            
            // Clears the form after sending the email
            e.target.reset();
          };

    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <form action='' onSubmit={sendEmail}>
                <table className='tableP6'>
                    <tr>
                        <td id="EmailP6"><input type="email" name="EmailP6" defaultValue={InfoSendEmail.Email} onChange={updateInfoSendEmail} /></td>
                        <td id="NameP6"><input type="text" name="NameP6" defaultValue={InfoSendEmail.Name} onChange={updateInfoSendName} /></td>
                    </tr>
                    <tr>
                        <td id="TitleP6" colspan="2"><input type="text" name="TitleP6" defaultValue={InfoSendEmail.Title} onChange={updateInfoSendTitle} /></td>
                    </tr>
                    <tr>
                        <td id="TextP6" colspan="2"><textarea type="text" name="TextP6" defaultValue={InfoSendEmail.Text} onChange={updateInfoSendText} /></td>
                    </tr>
                    <tr>
                        <td id="SubmitP6" colspan="2"><input type="submit" name="SubmitP6" value="ارسال" disabled={isSubmitting}/></td>
                    </tr>
                </table>
            </form>

            <div className='bbbbb'> 
                {InfoSendEmail.Name} <br/> {InfoSendEmail.Email} <br/> {InfoSendEmail.Title} <br/> {InfoSendEmail.Text} <br/>

                <br/>
                {stateMessage} 
                <br/>
            </div>
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