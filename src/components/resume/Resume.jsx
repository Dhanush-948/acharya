import React from 'react'
import './resume.css';
import ab from '../../image/msd.jpeg'

function Resume() {
    return (
        <div  className='he'>
            <img className ='msd'src={ab}/>
            <h1>Resume</h1>
            
<hr />
            <header>
                <h1>Dhanush G</h1>
                <p>Contact Information: dhanushacharyadhanushacharya1@email.com | 9108728622 </p>
             <p>my Linkedin:<a href="https://www.linkedin.com/in/dhanushacharya">dhanushacharya</a>.</p>
                <a href="https://www.linkedin.com/in/dhanushacharya" target="_blank">Dhanush Acharya</a>
            </header>

            <hr />

            <h2>Education</h2>
            <p><strong>School:</strong>Goverment junior college thirthahalli</p>
            <p><strong>college:</strong>Sahyadri Polytechic(aided)</p>
            <p><strong>Current:</strong> SMVITM</p>
            <hr />
            <h2>Skills</h2>
            <ul>
                <li>Communction skill</li>
                <li>Java</li>
                <li>Python</li>
                <li>C </li>
            </ul>
            <hr />
            <h2>achivements</h2>
            <ul> 
                <li>Taluk level cricket </li>
            </ul>
        </div>
    )
}

export default Resume