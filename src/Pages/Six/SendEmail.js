
function SendEmail() {

    // const info  

    // const sendEmail(subject,to,body) =>{
        
    //     /* SmtpJS.com - v3.0.0 */
    //     let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    
    //     Email.send({
    //         SecureToken : process.env.SECURE_TOKEN, // write your secure token
    //         To : to, // to include multiple emails you need to mention an array
    //         From : process.env.EMAIL_HOST,
    //         Subject : subject,
    //         Body : body
    //     })
    //     .then(message=>{
    //         // alert(message);
    //     });
    
        
    // }
    // return(<div></div>);

    // const ContactForm = () => {
    //     const [isSubmitting, setIsSubmitting] = useState(false);
    //     const [stateMessage, setStateMessage] = useState(null);
    //     const sendEmail = (e) => {
    //       e.persist();
    //       e.preventDefault();
    //       setIsSubmitting(true);
    //       emailjs
    //         .sendForm(
    //           process.env.REACT_APP_SERVICE_ID,
    //           process.env.REACT_APP_TEMPLATE_ID,
    //           e.target,
    //           process.env.REACT_APP_PUBLIC_KEY
    //         )
    //         .then(
    //           (result) => {
    //             setStateMessage('Message sent!');
    //             setIsSubmitting(false);
    //             setTimeout(() => {
    //               setStateMessage(null);
    //             }, 5000); // hide message after 5 seconds
    //           },
    //           (error) => {
    //             setStateMessage('Something went wrong, please try again later');
    //             setIsSubmitting(false);
    //             setTimeout(() => {
    //               setStateMessage(null);
    //             }, 5000); // hide message after 5 seconds
    //           }
    //         );
          
    //       // Clears the form after sending the email
    //       e.target.reset();
    //     };
    //     return (
    //       <form onSubmit={sendEmail}>
    //         <label>Name</label>
    //         <input type="text" name="user_name" />
    //         <label>Email</label>
    //         <input type="email" name="user_email" />
    //         <label>Message</label>
    //         <textarea name="message" />
    //         <input type="submit" value="Send" disabled={isSubmitting} />
    //         {stateMessage && <p>{stateMessage}</p>}
    //       </form>
    //     );
    //   };

    }
    
     export default SendEmail;