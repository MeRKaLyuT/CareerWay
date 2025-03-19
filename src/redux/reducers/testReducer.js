import { createSlice } from "@reduxjs/toolkit";
import questionsData from '../../data/profquest.json';
// import { Category } from "@mui/icons-material";


const questions = questionsData.questions;

const initialState = {
    questions,
    currentQuestion: 0,
    answers: {},
    testCompleted: false,
    result: null,
};

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        
        answerQuestion: (state, action) => {
            const { questionId, scores } = action.payload;
            state.answers[questionId] = scores;

            if (state.currentQuestion < state.questions.length - 1) {
                state.currentQuestion += 1;
            } else {
                state.testCompleted = true;
            }
        },

        calculateResult: (state) => {
            const result = {};
            
            Object.values(state.answers).forEach((score) => {
                Object.entries(score).forEach(([category, value]) => {
                    result[category] = (result[category] || 0) + value;
                });
            });

            state.result = result;
        },

        resetTest: (state) => {
            state.currentQuestion = 0;
            state.answers = {},
            state.testCompleted = false;
            state.result = null;
        },
    },
});

export const { answerQuestion, calculateResult, resetTest } = testSlice.actions;
export default testSlice.reducer;