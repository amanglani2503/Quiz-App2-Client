import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import * as Action from '../Redux/questionReducer' 
import axios from 'axios'

const useFetchQuestions = () => {
  const [isLoading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState(null);
  const state = useSelector(state => state.questions)

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Questions1 (Fetch): ", questions);
    // console.log("Answers1 (Fetch): ", answers); 
    // console.log("Questions (Fetch): ", state.queue);
    // console.log("Answers (Fetch): ", state.answers);
  }, [questions, answers, state.queue, state.answers]);
  

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const { data: { answers, questions } } = await axios.get('http://localhost:5000/quiz/questions');
        setQuestions(questions);
        setAnswers(answers)
        setLoading(false);
        dispatch(Action.startExamAction({questions, answers}));
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { isLoading, questions, error };
};

export default useFetchQuestions;