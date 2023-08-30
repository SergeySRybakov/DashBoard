import React from 'react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'

const LoadSavings = ({ setLayout, setCounter, setWidget, widgetsArray, setArray, setWidgetData }) => {
	return (
		<Button fontSize={'x-small'} colorScheme='blue' size='lg' variant='solid' onClick={async () => {
			await axios
				.get("./static/api/loadSavings.php")
				.then(function (response) {
					// обработка успешного запрос
					let info = JSON.parse(response.data['dashes']);
					setLayout(JSON.parse(response.data['dashes']).layout ? JSON.parse(response.data['dashes']).layout : []);
					setCounter(info.counter);
					setArray(info.widgets);
					setWidgetData(info.data);
					console.log(info)
				})
				.catch(function (error) {
					// обработка ошибки
					console.log(error);
				});
		}}>
			Load savings
		</Button>
	)
}

/* 95.24.224.166 185.26.122.81
185.216.204.133
85.249.20.212
85.249.21.182
 */
export default LoadSavings