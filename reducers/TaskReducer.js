//import { v4 as uuidv4 } from 'uuid';


const taskReducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_TASK':
            return action.payload.task;
        default:
            return state;
    }
};

export default taskReducer;