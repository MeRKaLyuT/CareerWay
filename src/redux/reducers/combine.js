import { combineReducers } from 'redux';
import roadmapSlice from './ReadyRoadmapReducer';
import simpleReducer from './testRed';



export default combineReducers({
    roadmapSlice,
    simpleReducer
});