import React from 'react'
import { Image, Box, Input, Button } from '@chakra-ui/react'

const Picture = ({ isEditorModeOn, i, setWidgetData, widgetData }) => {
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
            setWidgetData(obj);
        }
    }
    return (
        <Box style={{objectFit:'contain', display:'flex', justifyContent:'center', verticalAlign:'top', textAlign:'center', marginBlock:'0', width:'100%', height:'100%', position: 'relative', top:'0' }}>
            <img style={{objectFit:'contain', display:'flex', justifyContent:'center', textAlign:'center', verticalAlign:'top', marginBlock:'0', position:'relative', maxWidth:'100%',}} alt='pictures' id='img' src={widgetData[i]}>

            </img>
            {isEditorModeOn && (
                <div style={{position:'absolute', width:'100%', right:'0', bottom:'0', zIndex:'1'}}>
                    <Input placeholder="Select Date and Time" size="xs"
                        style={{width:'100%'}}
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