import React from 'react';
import { Button, ButtonGroup, } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import axios from 'axios';
import {
	Menu,
	MenuButton,
	MenuList
} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel
} from '@chakra-ui/react'

const Registr = ({ setLayout, setIsEditorModeOn, setAuthorised, setCounter, setArray, setWidgetData }) => {
	let data = {
		email: '',
		password: ''
	}
	return (
		<ButtonGroup spacing={4} direction='row' align='center'>
			<Menu>
				<MenuButton as={Button}>
					SignUp
				</MenuButton>
				<MenuList>
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input id='EmailSignUp' borderRadius={0} placeholder='Email' type='email' />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Password</FormLabel>
						<Input id='PasSignUp' borderRadius={0} placeholder='Password' type='password' />
					</FormControl>
					<Button onClick={() => {
						data.email = document.getElementById('EmailSignUp').value;
						data.password = document.getElementById('PasSignUp').value;
						axios
							.post("./static/api/registr.php", data)
							.then(function (response) {
								setAuthorised(true);
								setIsEditorModeOn(true);
							})
							.catch(function (error) {
								// обработка ошибки
								setAuthorised(false);
								setIsEditorModeOn(false);
							})
					}} borderRadius={0} width="full" mt={4} type="submit">
						Sign In
					</Button>
				</MenuList>
			</Menu>
			<Menu>
				<MenuButton as={Button}>
					LogIn
				</MenuButton>
				<MenuList>
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input id='LogInEmail' borderRadius={0} placeholder='Email' type='email' />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Password</FormLabel>
						<Input id='LogInPas' borderRadius={0} placeholder='Password' type='password' />
					</FormControl>
					<Button onClick={() => {
						data.email = document.getElementById('LogInEmail').value;
						data.password = document.getElementById('LogInPas').value;
						axios
							.post("./static/api/autoris.php", data)
							.then(function (response) {
								setAuthorised(true);
								setIsEditorModeOn(true);
								console.log(response)
							})
							.catch(function (error) {
								setAuthorised(false);
								setIsEditorModeOn(false);
							})
						axios
							.get("./static/api/loadSavings.php")
							.then(function (response) {
								let info = JSON.parse(response.data['dashes']);
								setLayout(JSON.parse(response.data['dashes']).layout ? JSON.parse(response.data['dashes']).layout : []);
								setCounter(info.counter);
								setArray(info.widgets);
								setWidgetData(info.data);
							})
							.catch(function (error) {
								console.log(error);
							});
					}} borderRadius={0} width="full" mt={4} type="submit">
						Log In
					</Button>
				</MenuList>
			</Menu>
			{/* <Button onClick={() => {setAuthorised(false)}}>
				DeLogin
			</ Button> */}
		</ButtonGroup>
	);
}
export default Registr;