import './Six.css';

function Six(){

    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <table className='tableP6'>
                <tr>
                    <td id="EmailP6"><input type="text" value="ایمیل"/></td>
                    <td id="NameP6"><input type="text" value="نام"/></td>
                </tr>
                <tr>
                    <td id="TitleP6" colspan="2"><input type="text" value="موضوع"/></td>
                </tr>
                <tr>
                    <td id="TextP6" colspan="2"><input type="text" value="متن پیام"/></td>
                </tr>
                <tr>
                    <td id="SubmitP6" colspan="2"><input type="submit" value="ارسال"/></td>
                </tr>
            </table>
            
        </div>
    );
}

export default Six;