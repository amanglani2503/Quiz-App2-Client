import { combineReducers, configureStore} from '@reduxjs/toolkit'
import  questionReducer  from './questionReducer'
import  resultReducer  from './resultReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    login : loginReducer
})

export default configureStore({reducer : rootReducer})