import React from 'react'
import '../styles/Dummy.css'
import { useNavigate } from 'react-router-dom';

export default function Dummy() {
    const navigate = useNavigate();

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '1.2rem',
        paddingTop: '10px',
    };

    const handleClick = () => {
        navigate('/admin/createquestion')
    }

    return (
        <div className='dummy'>
            <h2>Questions created successfully !!</h2>
            <button style={linkStyle} onClick={handleClick}>Create More Questions</button>
        </div>
    )
}
