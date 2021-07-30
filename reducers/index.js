import  { combineReducers } from 'redux';
import  taskReducer  from './TaskReducer.js';
import tasksReducer from './tasks/TasksReducer'

const rootReducer = combineReducers({
    task : taskReducer,
    tasks : tasksReducer
});

export default rootReducer;