import React from 'react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { dashboardService } from '../../../backend/dashboard.service'

const SaveEditings = ({ data }) => {
    return (
        <>
            <Button colorScheme='blue' size='lg' variant='solid' onClick={() => {
                dashboardService.SaveEditings(data)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }}>
                Save
            </Button>
        </>
    )
}

export default SaveEditings