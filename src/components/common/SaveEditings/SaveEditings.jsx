import React from 'react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const SaveEditings = ({data}) => {
    return (
        <>
            <Button colorScheme='blue' size='lg' variant='solid' onClick={() => {
                axios
                    .post("./static/api/save.php", data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            }}>
                Save
            </Button>
        </>
    )
}

export default SaveEditings