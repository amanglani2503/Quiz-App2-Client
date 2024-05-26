import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
};

export const questionReducer = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    startExamAction: (state, action) => {
      let {questions, answers} = action.payload
      return {
        ...state,
        queue : questions,
        answers
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1
      };
    },
    resetAllAction: () => {
      return initialState;
    }
  }
});

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;
