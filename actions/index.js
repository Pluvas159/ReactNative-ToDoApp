import { _retrieveData } from "../utils/storage";
//import { AsyncStorage } from 'react-native'


export const addTask = task => ({
  type: 'ADD_TASK',
  payload: { task }
})

export const updateTask = task => ({
  type: 'UPDATE_TASK',
  payload: { task }
})

export const initTasks = () => {
  return async (dispatch) => {
    try {
      let tasks = await _retrieveData('tasks')
      dispatch(initSuccessful(tasks))
    } catch (e) {
      throw new Error('error retrieving data'+e)
    }
  }
};

const initSuccessful = (tasks) => ({
  type: 'INIT_TASKS',
  payload: { tasks }
}
);

export const changeTask = (task, state) => ({
    type: 'CHANGE_TASK',
    payload: {task, state}

})

export const removeTask = (task) => ({
  type: 'REMOVE_TASK',
  payload: {task}
})
