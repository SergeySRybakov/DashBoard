import React from 'react'
import { Box, Input, Button } from '@chakra-ui/react';
import { setWidgetsData } from '../../../reducers/widgetDataReducer';
import { useDispatch } from 'react-redux';

const Picture = ({ isEditorModeOn, i, widgetData }) => {
    const dispatch = useDispatch();
    const handleAddingPictureButtonClick = () => {
        let file = document.getElementById("fileInputBase").files[0];
        let reader = new FileReader();

        reader.readAsDataURL(file);
        console.log(widgetData[i])

        reader.onloadend = function () {
            console.log(reader.result);
            let obj = Object.assign([], widgetData);
            obj[i] = reader.result;
            console.log(obj)
            dispatch(setWidgetsData(obj));
        }
    }
    return (
        <Box style={{objectFit:'contain', display:'flex', justifyContent:'center', verticalAlign:'top', textAlign:'center', marginBlock:'0', maxWidth:'100%', height:'100%', position: 'absolute', top:'0' }}>
            <img style={{objectFit:'contain', display:'flex', justifyContent:'center', textAlign:'center', verticalAlign:'top', marginBlock:'0', position:'relative', maxWidth:'100%',}} alt='pictures' id='img' src={widgetData[i]}>

            </img>
            {isEditorModeOn && (
                <div style={{position:'absolute', right:'0', bottom:'0'}}>
                    <Input placeholder="Select Date and Time" size="xs"
                        style={{  position:'relative', maxWidth: '50%', bottom: '0', left: '0' }}
                        id='fileInputBase'
                        type='file'
                    />
                    <Button style={{ position:'relative', maxWidth: '50%', margin: '3%', bottom: '0', right: '0' }} onClick={handleAddingPictureButtonClick}
                        colorScheme='blue'>Button</Button>
                </div>
            )}

        </Box>
    )
}

export default Picture