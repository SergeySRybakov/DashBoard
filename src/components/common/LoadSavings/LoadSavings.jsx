import React from 'react'
import { Button } from '@chakra-ui/react'
import { dashboardService } from '../../../backend/dashboard.service'

const LoadSavings = ({ setLayout, setCounter, setArray, setWidgetData }) => {
	const handleLoadSavingsButtonClick = () => {
		dashboardService.loadSavings()
			.then((response) => {
				let info = JSON.parse(response.data['dashes']);
				setLayout(info.layout);
				setCounter(info.counter);
				setArray(info.widgets);
				setWidgetData(info.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}
	return (
		<Button fontSize={'x-small'} colorScheme='blue' size='lg' variant='solid' onClick={handleLoadSavingsButtonClick}>
			Load savings
		</Button >
	)
}

export default LoadSavings