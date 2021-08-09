//import { v4 as uuidv4 } from 'uuid';
import {_storeData, _retrieveData} from '../../utils/storage'
let tasks;
const tasksReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TASK':
            tasks = [...state, action.payload.task];
            _storeData('tasks', JSON.stringify(tasks));
            return tasks;
        
        case 'INIT_TASKS':
            return action.payload.tasks;

        case 'CHANGE_TASK':
            tasks =  state.map(task => {
                if (action.payload.task === task){
                    task.state = action.payload.state;
                }
                return task;
            })
            _storeData('tasks', JSON.stringify(tasks));
            return tasks; 
        
        case 'REMOVE_TASK':
            tasks = state.filter(task => task !== action.payload.task)
            _storeData('tasks', JSON.stringify(tasks));
            return tasks;
        
ň
        default:
            return state;
    }
};

export default tasksReducer;