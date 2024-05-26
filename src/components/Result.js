import React, { useEffect } from 'react'
import ResultTable from './ResultTable'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetResultAction } from '../Redux/resultReducer'
import { resetAllAction } from '../Redux/questionReducer'
import { attempts_Number, earnPoints_Number, flagResult } from '../Helper/Helper'
import { usePublishResult } from '../Hooks/setResult'
import '../styles/Result.css'

export default function Result() {
    const linkStyle = {
        'color': 'black',
        'textDecoration': 'none',
        'fontWeight': '500',
        'fontSize': '1.2rem',
        'paddingTop': '10px'
    }

    const dispatch = useDispatch()
    const {questions: { queue, answers }, result: { result }, login : {user}} = useSelector(state => state)
    // const {questions: { queue, answers }} = useSelector(state => state.questions)
    // const { result: { result } } = useSelector(state => state.result)
    // const {  login : {user} } = useSelector(state => state.login)

    // const { questions } = useSelector(state => state.questions);
    // const { result } = useSelector(state => state.result);
    // const { login } = useSelector(state => state.login);

    // console.log("Questions state:", questions);
    // console.log("Result state:", result);
    console.log("Login state:", user.email);


    const totalPoints = queue.length;
    const attempts = attempts_Number(result)
    const earnPoints = earnPoints_Number(result, answers, 1)
    const flag = flagResult(totalPoints, earnPoints)
    console.log("User:", user)
    usePublishResult({
        result,
        username: user,
        attempts,
        points: earnPoints,
        achived: flag ? "Passed" : "Failed"
    });

    const onRestart = () => {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
        <>
            <div>
                <h1 className='header'>Result</h1>

                <div className='result flex-center'>
                    <div className='flex'>
                        <span>Username : </span>
                        <span className='bold'>{user.email || 'Nothing'}</span>
                    </div>
                    <div className='flex'>
                        <span>Total Quiz Points : </span>
                        <span className='bold'>{totalPoints || 0}</span>
                    </div>
                    <div className='flex'>
                        <span>Total Questions : </span>
                        <span className='bold'>{queue.length || 0}</span>
                    </div>
                    <div className='flex'>
                        <span>Total Attempts : </span>
                        <span className='bold'>{attempts || 0}</span>
                    </div>
                    <div className='flex'>
                        <span>Total Earn Points : </span>
                        <span className='bold'>{earnPoints || 0}</span>
                    </div>
                    <div className='flex'>
                        <span>Quiz Result : </span>
                        <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'>{flag ? " Passed" : "Failed"}</span>
                    </div>
                </div>

                <div className="start">
                    <Link className='btn' to={'/startquiz'} style={linkStyle} onClick={onRestart}>Restart</Link>
                </div>

                {/* <ResultTable></ResultTable> */}
            </div>
        </>
    )
}