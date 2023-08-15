import React from 'react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setWidgetsData } from '../../../reducers/widgetDataReducer';

const Text = ({ isEditorModeOn, i, widgetData}) => {
    const dispatch = useDispatch();/* 
    const widgetData = useSelector(state => state.widgetsData.widgetsData); */
    let textData = 'Nothing';
    const handleAddingTextButtomClick = () => {
        textData = document.getElementById(`${i}textWidget`).value;
        let obj = Object.assign([], widgetData);
        obj[i] = textData;
        dispatch(setWidgetsData(obj));
        console.log(widgetData);
        console.log(obj)
    }
    return (
        <>
            { isEditorModeOn && <Button position={'relative'} onClick={handleAddingTextButtomClick}>SaveText</Button>}
            {isEditorModeOn ?
                <Textarea value={widgetData[i]} id={`${i}textWidget`} maxHeight={'100%'} />
                :
                React.createElement('p', {}, widgetData[i])
            }

        </>

    )
}

export default Text