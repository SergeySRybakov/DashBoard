import React from 'react'
import { Image, Box, Input, Button } from '@chakra-ui/react'

const Picture = ({ isEditorModeOn, i, setWidgetData, widgetData }) => {
    return (
        <Box style={{ overflow:'auto', verticalAlign:'top', marginBlock:'0', maxWidth:'100%', maxHeight:'100%', position: 'absolute' }}>
            <img style={{ verticalAlign:'top', marginBlock:'0', maxWidth: '100%', maxHeight: '90%', position:'relative', top:'0',  }} alt='pictures' id='img' src={widgetData[i]}>

            </img>
            {isEditorModeOn && (
                <>
                    <Input placeholder="Select Date and Time" size="xs"
                        style={{ maxWidth: '50%', position: 'absolute', bottom: '0', left: '0' }}
                        id='fileInputBase'
                        type='file'
                    />
                    <Button style={{ maxWidth: '50%', margin: '3%', position: 'absolute', bottom: '0', right: '0' }} onClick={() => {
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