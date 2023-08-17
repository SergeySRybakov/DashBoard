import React from 'react'
import { Button } from '@chakra-ui/react'
import { dashboardService } from '../../../api/dashboard.service'

const LoadSavings = ({ setLayout, setWidgetsArray, setWidgetData, data }) => {
	const handleLoadSavingsButtonClick = () => {
		dashboardService.loadSavings()
			.then((response) => {
				let info = JSON.parse(response.data['dashes']);
				setLayout(info.layout);
				setWidgetsArray(info.widgets);
				setWidgetData(info.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}
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
			<Button fontSize={'x-small'} colorScheme='blue' size='lg' variant='solid' onClick={handleLoadSavingsButtonClick}>
				Load savings
			</Button >
			<Button colorScheme='blue' size='lg' variant='solid' onClick={handleSaveButtonClick}>
				Save
			</Button>
		</>
	)
}

export default LoadSavings