//import { v4 as uuidv4 } from 'uuid';
import {_storeData, _retrieveData} from '../../utils/storage'

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TASK':
            let tasks = [...state, action.payload.task]
            _storeData('tasks', JSON.stringify(tasks))
            return tasks;
        
        case 'INIT_TASKS':
            return action.payload.tasks
        
ň
        default:
            return state;
    }
};

export default tasksReducer;