import './Six.css';
import emailjs from 'emailjs-com';


function Six(){

    // function sendEmail(e) {
    //     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //       .then((result) => {
    //           window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   }

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_y8ycm1s', 'template_3gx9e0d', e.target, '9U64idXn07ZppBH-Q')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }



    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <form action=''>
                <table className='tableP6'>
                    <tr>
                        <td id="EmailP6"><input type="text" name="EmailP6" /></td>
                        <td id="NameP6"><input type="text" name="NameP6" /></td>
                    </tr>
                    <tr>
                        <td id="TitleP6" colspan="2"><input type="text" name="TitleP6" /></td>
                    </tr>
                    <tr>
                        <td id="TextP6" colspan="2"><textarea type="text" name="TextP6" /></td>
                    </tr>
                    <tr>
                        <td id="SubmitP6" colspan="2"><input type="submit" name="SubmitP6" value="ارسال"/></td>
                    </tr>
                </table>
            </form>

            {/* <form className='tableP6' action=''>
                <input type="text" name="EmailP6" value="ایمیل"/>
                <input type="text" id="NameP6" name="NameP6" />
                <input type="text" id="TitleP6" name="TitleP6" value="موضوع"/>
                <input  type="text" id="TextP6" name="TextP6" value="متن پیام"/>
                <input type="submit" id="SubmitP6" name="SubmitP6" value="ارسال"/>
            </form> */}

            {/* <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <br/>
                <label>نام</label>
                <input type="text" name="from_name" />
                <br/>
                <label>ایمیل</label>
                <input type="email" name="from_email" />
                <br/>
                <label>موضوع</label>
                <input type="text" name="subject" />
                <br/>
                <label>متن پیام</label>
                <textarea name="html_message" />
                <br/>
                <input type="submit" value="Send" />
            </form> */}

            {/* <script type="text/javascript"
                        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                </script>
                <script type="text/javascript">
                (function(){
                    emailjs.init("YOUR_PUBLIC_KEY");
                })();
            </script> */}

            {/* <script type="text/javascript"
                        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
                </script>
                <script type="text/javascript">
                {() => {
                    emailjs.init("9U64idXn07ZppBH-Q");
                }}();
            </script> */}

        </div>
    );
}

export default Six;