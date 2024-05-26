import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Questions.css'
import useFetchQuestions from '../Hooks/FetchQuestions';
import { updateResult } from '../Hooks/setResult';


export default function Questions({onChecked}) {

    const dispatch = useDispatch();
    const { isLoading, question, error } = useFetchQuestions();
    const [check, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const questions = useSelector(state => state.questions.queue[trace])
    const result = useSelector(state => state.result)

    useEffect(() => {
        dispatch(updateResult({trace, check}))
        console.log("checked: ",typeof check)
    }, [check])

    useEffect(() => {
        setChecked(undefined)
    }, [trace])


    function onSelect(i) {
        setChecked(i)
        onChecked(i)
        dispatch(updateResult({trace, check}))
    }

    return (
        <div className='question'>
            <h3>{questions?.question}</h3>

            <ul key={questions?.id}>
                {
                    questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}   
                                // Check if should be checked or false
                                name="options"
                                id={`q${i}-option`}
                                onChange={() => onSelect(i)} />
                                <label htmlFor={`q${i}-option`}>{q}</label>
                                    <div className='check'>
                                        <div className={`${check == i ? 'checked' : ''}`}></div>
                                    </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}