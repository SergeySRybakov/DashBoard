import React from 'react'
import { Button } from '@chakra-ui/react'
import { dashboardService } from '../../../backend/dashboard.service'

const LoadSavings = ({ setLayout, setCounter, widgetsArray, setArray, setWidgetData }) => {
	const handleLoadSavingsButtonClick = () => {
		dashboardService.loadSavings()
				.then((response) => {
					let info = JSON.parse(response.data['dashes']);
					setLayout(info.layout);
					setCounter(info.counter);
					setArray(info.widgets);
					setWidgetData(info.data);
					console.log(info)
					console.log(response)
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

/* 95.24.224.166 185.26.122.81
185.216.204.133
85.249.20.212
85.249.21.182
 */
export default LoadSavings