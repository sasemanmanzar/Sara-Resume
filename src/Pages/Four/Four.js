import './Four.css';

//مهارت ها

function Four({ text, pageRef }){

    return(
        <div id='IdFour' className='four' ref={pageRef}>
            <div className='boxPage4'>
            <div className='smallBoxSkill'><p>{text.main.titleSkills}</p></div>

            <div className='boxSkill'>

                <div className='boxs'>
                    <div className='textBoxs'>React.Js</div>
                    <div id="ReactJs" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Data Mining</div>
                    <div id="DataMining" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Android Development</div>
                    <div id="AndroidDevelopment" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Java Script</div>
                    <div id="JavaScript" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Front-end Development</div>
                    <div id="FrontEnd" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Cascading Style Sheets (CSS)</div>
                    <div id="CSS" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Research</div>
                    <div id="Research" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>Persian language</div>
                    <div id="PersianLanguage" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>English language</div>
                    <div id="EnglishLanguage" className='value'></div>
                </div>

                <div className='boxs'>
                    <div className='textBoxs'>German language</div>
                    <div id="GermanLanguage" className='value'></div>
                </div>
            </div>


            {/* <table className='tableP4'>
                <tr>
                    <td id="titleTP4">Data Mining</td>
                    <td id="blank-middel"></td>
                    <td id="titleTP4">React.Js</td>
                </tr>
                <tr>
                    <td id="sk1"></td>
                    <td id="blank-middel"></td>
                    <td id="sk3"></td>
                </tr>
                <tr>
                    <td id="titleTP4">Android Development</td>
                    <td id="blank-middel"></td>
                    <td id="titleTP4">Research</td>
                </tr>
                <tr>
                    <td id="sk01"></td>
                    <td id="blank-middel"></td>
                    <td id="sk03"></td>
                </tr>
                <tr>
                    <td id="titleTP4">Front-end Development</td>
                    <td id="blank-middel"></td>
                    <td id="titleTP4">Persian language</td>
                </tr>
                <tr>
                    <td id="sk001"></td>
                    <td id="blank-middel"></td>
                    <td id="sk003"></td>
                </tr>
                <tr>
                    <td id="titleTP4">Cascading Style Sheets (CSS)</td>
                    <td id="blank-middel"></td>
                    <td id="titleTP4">English language</td>
                </tr>
                <tr>
                    <td id="sk0001"></td>
                    <td id="blank-middel"></td>
                    <td id="sk0003"></td>
                </tr>
                <tr>
                    <td id="titleTP4">Java Script</td>
                    <td id="blank-middel"></td>
                    <td id="titleTP4">German language</td>
                </tr>
                <tr>
                    <td id="sk00001"></td>
                    <td id="blank-middel"></td>
                    <td id="sk00003"></td>
                </tr> */}

                {/* <tr>
                    <td id="s1">Data Mining</td>
                    <td id="s2"></td>
                    <td id="s3">React.Js</td>
                </tr>
                <tr>
                    <td id="sk1"></td>
                    <td id="sk2"></td>
                    <td id="sk3"></td>
                </tr>
                <tr>
                    <td id="s01">Android Development</td>
                    <td id="s02"></td>
                    <td id="s03">Research</td>
                </tr>
                <tr>
                    <td id="sk01"></td>
                    <td id="sk02"></td>
                    <td id="sk03"></td>
                </tr>
                <tr>
                    <td id="s001">Front-end Development</td>
                    <td id="s002"></td>
                    <td id="s003">Persian language</td>
                </tr>
                <tr>
                    <td id="sk001"></td>
                    <td id="sk002"></td>
                    <td id="sk003"></td>
                </tr>
                <tr>
                    <td id="s0001">Cascading Style Sheets (CSS)</td>
                    <td id="s0002"></td>
                    <td id="s0003">English language</td>
                </tr>
                <tr>
                    <td id="sk0001"></td>
                    <td id="sk0002"></td>
                    <td id="sk0003"></td>
                </tr>
                <tr>
                    <td id="s00001">Java Script</td>
                    <td id="s00002"></td>
                    <td id="s00003">German language</td>
                </tr>
                <tr>
                    <td id="sk00001"></td>
                    <td id="sk00002"></td>
                    <td id="sk00003"></td>
                </tr> */}
            {/* </table> */}
        </div>
        </div>
    );
}

export default Four;


// Data Mining
// Android Development
// Front-end Development
// Cascading Style Sheets (CSS)
// Java Script
// React.Js
// Research