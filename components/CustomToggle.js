import React from 'react'
import { Toggle, Layout, Icon, Button } from '@ui-kitten/components'

const useToggleState = (initialState = false) => {
    const [checked, setChecked] = React.useState(initialState);

    const onCheckedChange = (isChecked) => {
        setChecked(isChecked);
    };

    return { checked, onChange: onCheckedChange };
};


const CustomToggle = () => {
    const ToggleState = useToggleState();
    return (
        <>
            <Button accessoryLeft ={<Icon name='archive' fill='#fff' style={{ width: 30, height: 30, float: 'left' }} />} style = {{marginRight:5}} appearance='ghost' ></Button>
            <Toggle status='success' {...ToggleState}></Toggle>
        </>)

}

export default CustomToggle;