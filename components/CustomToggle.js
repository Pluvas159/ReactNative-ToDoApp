import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Toggle, Layout, Icon, Button } from '@ui-kitten/components'
import { changeTask, removeTask } from '../actions'


const CustomToggle = ({task}) => {
    const [ToggleState, changeToggleState] = useState(task.state===1? true:false);
    const dispatch = useDispatch()

    const changeToggle = (checked) => {
        dispatch(changeTask(task, checked? 1:0));
    }

    const removeThisTask = () => {
        dispatch(removeTask(task))
    }


    return (
        <>
            <Button accessoryLeft ={<Icon name='archive' fill='#fff' style={{ width: 30, height: 30, float: 'left' }} />} style = {{marginRight:5}} appearance='ghost' onPress = {() => {removeThisTask()}} ></Button>
            <Toggle status='success' checked = {ToggleState} onChange = {(e) => {changeToggle(e)}}></Toggle>
        </>)

}

export default CustomToggle;