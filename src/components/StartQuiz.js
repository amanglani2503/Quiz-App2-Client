import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout';
import '../styles/StartQuiz.css'

export default function StartQuiz() {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '1.2rem',
        paddingTop: '10px',
    };

    return (
        <div className='container'>
            <Logout/>
            <h2 className='header'>Quiz Application</h2>

            <div className="instructions">
                <h3>Instructions</h3>
                <ul>
                    <li>You will get 1 hour to Complete this test</li>
                    <li>There are 60 questions in this test</li>
                    <li>You will be awarded 1 marks per question</li>
                    <li>You must score 50% or above to pass</li>
                </ul>
            </div>

            <div className="start">
                <div className="btn">
                    <Link to='/quiz' style={linkStyle}>Start Quiz</Link>
                </div>
            </div>
        </div>
    )
}
