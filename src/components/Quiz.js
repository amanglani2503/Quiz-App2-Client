import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
import {moveNextAction, movePrevAction} from '../Redux/questionReducer'
import { PushAnswer } from '../Hooks/setResult';

import Questions from './Questions';
import '../styles/Quiz.css'

export default function Quiz() {

    const dispatch = useDispatch();
    const [check, setChecked] = useState(undefined)
    const {queue, trace} = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)

    useEffect(()=>{
        console.log("Result", result);
        console.log("Check", check);
    },[result,check])    

    function onNext(){
        if(trace < queue.length){           
            dispatch(moveNextAction());

            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }

        setChecked(undefined)
    }

    function onPrev(){
        if(trace > 0){
            dispatch(movePrevAction());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    // /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/quiz/result'} replace={true}></Navigate>
    }

    return (
        <div className='container'>
            <h1 className='header'>Quiz Application</h1>
            <div className='content'>
                <Questions onChecked = {onChecked}/>
            </div>
            <div className='flex btn'>
                <button className='prev' onClick={onPrev}>Prev</button>
                <button className='next' onClick={onNext}>Next</button>
            </div>

        </div>
    )
}
