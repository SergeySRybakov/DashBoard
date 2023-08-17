import React from 'react'
import { Button } from '@chakra-ui/react'
import { dashboardService } from '../../../api/dashboard.service';
import { useDispatch, useSelector } from "react-redux";
import { setCounter } from '../../../reducers/counterReducer';
import { setLayout } from '../../../reducers/layoutReducer';
import { setWidgetsArray } from '../../../reducers/widgetsReducer';
import { setWidgetsData } from '../../../reducers/widgetDataReducer';

const LoadSavings = ({ data }) => {
	const dispatch = useDispatch();
	const handleLoadSavingsButtonClick = () => {
		dashboardService.loadSavings()
			.then((response) => {
				let info = JSON.parse(response.data['dashes']);
				dispatch(setLayout(info.layout));
				dispatch(setCounter(info.counter));
				dispatch(setWidgetsArray(info.widgets));
				dispatch(setWidgetsData(info.data));
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