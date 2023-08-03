import React from 'react'
import { Button } from '@chakra-ui/react'
import { dashboardService } from '../../../api/dashboard.service'

const SaveEditings = ({ data }) => {
    const handleSaveButtonClick = () => {
        dashboardService.SaveEditings(data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <Button colorScheme='blue' size='lg' variant='solid' onClick={handleSaveButtonClick}>
                Save
            </Button>
        </>
    )
}

export default SaveEditings