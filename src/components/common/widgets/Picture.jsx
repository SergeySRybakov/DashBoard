import React from 'react'
import { Image, Box, Input, Button } from '@chakra-ui/react'

const Picture = ({ isEditorModeOn, i, setWidgetData, widgetData }) => {
    return (
        <Box style={{display:'flex', justifyContent:'center', alignItems:'center', verticalAlign:'top', textAlign:'center', marginBlock:'0', maxWidth:'100%', height:'100%', position: 'absolute' }}>
            <img style={{display:'flex', justifyContent:'center', alignItems:'center', borderRadius:'5%', textAlign:'center', verticalAlign:'top', marginBlock:'0', maxWidth: '100%', height: '90%', position:'relative', top:'0',  }} alt='pictures' id='img' src={widgetData[i]}>

            </img>
            {isEditorModeOn && (
                <>
                    <Input placeholder="Select Date and Time" size="xs"
                        style={{  position:'relative', maxWidth: '50%', bottom: '0', left: '0' }}
                        id='fileInputBase'
                        type='file'
                    />
                    <Button style={{ position:'relative', maxWidth: '50%', margin: '3%', bottom: '0', right: '0' }} onClick={() => {
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

                    }}
                        colorScheme='blue'>Button</Button>
                </>
            )}

        </Box>
    )
}

export default Picture