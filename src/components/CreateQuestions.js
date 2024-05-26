import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateQuestions.css'

export default function CreateQuestions() {
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '1.2rem',
        paddingTop: '10px',
    };

    const Navigate = useNavigate();

    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [answers, setAnswers] = useState([]);

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleOptionChange = (index, event) => {
        const newOptions = [...options];
        newOptions[index] = event.target.value;
        setOptions(newOptions);
    };
    
    const handleCorrectAnswerChange = (event) => {
        const selectedAnswer = parseInt(event.target.value)
        setCorrectAnswer(selectedAnswer);
        setAnswers(prevAnsArray => [...prevAnsArray, selectedAnswer]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newQuestion = {
                question: question,
                options: options,
            };
            const response = await axios.post('http://localhost:5000/admin/createquestion', {
                questions: [...questions, newQuestion],
                answers: answers,
            });
            // console.log("Answers : ", answers)
            // console.log("Questions : ", questions)

            if (response.status === 201) {
                Navigate('/dummy');
            }
        } catch (error) {
            console.log("Error Occurred:", error);
        }
    };

    const addToQuestions = (event) => {
        event.preventDefault();
        const newQuestion = {
            question: question,
            options: options
        };
        setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
        // Clear input fields after adding question
        setQuestion('');
        setOptions(['', '', '']);
        setCorrectAnswer('');
    };

    return (
        <div className="question-form">
            <h2>Question Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea
                        id="question"
                        value={question}
                        onChange={handleQuestionChange}
                        rows={1}
                        style={{ minHeight: '50px', resize: 'vertical' }}
                    />
                </div>
                <div className="form-group">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="option-group">
                            <label htmlFor={`option${index}`} className="option-label">{`Option ${index}:`}</label>
                            <input
                                type="text"
                                id={`option${index}`}
                                value={options[index - 1]}
                                onChange={(e) => handleOptionChange(index - 1, e)}
                                className="option-input"
                            />
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <label htmlFor="correctAnswer">Correct Answer:</label>
                    <select
                        id="correctAnswer"
                        value={correctAnswer}
                        onChange={handleCorrectAnswerChange}
                        className="correct-answer-select"
                    >
                        <option value={""}>Select Correct Answer</option>
                        {[1, 2, 3].map((index) => (
                            <option key={index} value={index - 1}>{`Option ${index}`}</option>
                        ))}
                    </select>
                </div>
                <div className='submit'>
                    <button className='btns2' style={linkStyle} onClick={handleSubmit}>Submit Questions</button>
                    <button className='btns2' onClick={addToQuestions} style={linkStyle}>More Questions ?</button>
                </div>
            </form>
        </div>
    );
};