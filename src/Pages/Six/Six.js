import './Six.css';
// import emailjs from 'emailjs-com';
import { useState } from 'react';


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

        // const updateText = (e) => {
        //     // const sara = e;
        //     SetInfo(previousState => {
        //       return { ...previousState, Text: e.target.value }
        //     });
        //   }

    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <form action=''>
                <table className='tableP6'>
                    <tr>
                        <td id="EmailP6"><input type="text" name="EmailP6" defaultValue={InfoSendEmail.Email} onChange={updateInfoSendEmail} /></td>
                        <td id="NameP6"><input type="text" name="NameP6" defaultValue={InfoSendEmail.Name} onChange={updateInfoSendName} /></td>
                    </tr>
                    <tr>
                        <td id="TitleP6" colspan="2"><input type="text" name="TitleP6" defaultValue={InfoSendEmail.Title} onChange={updateInfoSendTitle} /></td>
                    </tr>
                    <tr>
                        <td id="TextP6" colspan="2"><textarea type="text" name="TextP6" defaultValue={InfoSendEmail.Text} onChange={updateInfoSendText} /></td>
                    </tr>
                    <tr>
                        <td id="SubmitP6" colspan="2"><input type="submit" name="SubmitP6" value="ارسال"/></td>
                    </tr>
                </table>
            </form>

            <div className='bbbbb'> 
                {InfoSendEmail.Name} <br/> {InfoSendEmail.Email} <br/> {InfoSendEmail.Title} <br/> {InfoSendEmail.Text} <br/>
            </div>
        </div>
    );
}

export default Six;