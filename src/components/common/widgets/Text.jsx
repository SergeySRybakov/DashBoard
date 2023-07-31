import React from 'react';
import { Textarea } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const Text = ({ isEditorModeOn, i, widgetData, setWidgetData }) => {
    let textData = 'Nothing';
    return (
        <>
            <Button position={'relative'} onClick={() => {
                textData = document.getElementById(`${i}textWidget`).value;
                console.log(textData)
                let obj = Object.assign([], widgetData);
                obj[i] = textData;
                setWidgetData(obj);
            }}>SaveText</Button>
            {isEditorModeOn ?
                <Textarea value={widgetData[i]} id={`${i}textWidget`} maxHeight={'100%'} />
                :
                React.createElement('p', {}, widgetData[i])
            }

        </>

    )
}

export default Text