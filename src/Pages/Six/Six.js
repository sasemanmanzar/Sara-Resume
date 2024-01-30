import './Six.css';

function Six(){

    return(
        <div id='IdSix' className='six'>
            <div className='smallBoxCallMe topCallMe1'><p>تماس با ما</p></div>

            <table className='tableP6'>
                <tr>
                    <td id="NameP6"><input type="text" value="NameP6"/></td>
                    <td id="EmailP6"><input type="text" value="EmailP6"/></td>
                </tr>
                <tr>
                    <td id="TitleP6" colspan="2"><input type="text" value="TitleP6"/></td>
                </tr>
                <tr>
                    <td id="TextP6" colspan="2"><input type="text" value="TextP6"/></td>
                </tr>
                <tr>
                    <td id="SubmitP6" colspan="2"><input type="submit" value="Submit"/></td>
                </tr>
            </table>
            
        </div>
    );
}

export default Six;