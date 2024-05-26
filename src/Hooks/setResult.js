import { useDispatch } from 'react-redux'
import * as Action from '../Redux/resultReducer'
import { postServerData } from '../Helper/Helper'

export const PushAnswer = (result)=> async(dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

export const updateResult = (index) => async(dispatch)=>{
    try {
        dispatch(Action.updateResultAction(index))
    } catch (error) {
        console.log(error);
    }
}

export const usePublishResult = (resultData) => {
    const { result, username} = resultData;
    // console.log(result, username)
    (async () => {
        try {
            if(result.length === 0 && !username) throw new Error("Couldn't get Result");
            await postServerData('http://localhost:5000/quiz/result', resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}