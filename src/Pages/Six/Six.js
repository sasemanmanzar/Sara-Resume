import './Six.css';

function Six(){

    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <form action=''>
                <table className='tableP6'>
                    <tr>
                        <td id="EmailP6"><input type="text" name="EmailP6" value="ایمیل"/></td>
                        <td id="NameP6"><input type="text" name="NameP6" value="نام"/></td>
                    </tr>
                    <tr>
                        <td id="TitleP6" colspan="2"><input type="text" name="TitleP6" value="موضوع"/></td>
                    </tr>
                    <tr>
                        <td id="TextP6" colspan="2"><input type="text" name="TextP6" value="متن پیام"/></td>
                    </tr>
                    <tr>
                        <td id="SubmitP6" colspan="2"><input type="submit" name="SubmitP6" value="ارسال"/></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Six;