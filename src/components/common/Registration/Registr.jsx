import React from 'react';
import { Button, ButtonGroup, } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { authService } from '../../../backend/auth.service';
import { dashboardService } from '../../../backend/dashboard.service';
import {
	Menu,
	MenuButton,
	MenuList
} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel
} from '@chakra-ui/react'

const Registr = ({ setLayout, setIsEditorModeOn, setIsAuthorised, setCounter, setArray, setWidgetData }) => {
	let data = {
		email: '',
		password: ''
	}
	const handleSignUpButtonClick = () => {
		data.email = document.getElementById('EmailSignUp').value;
		data.password = document.getElementById('PasSignUp').value;
		authService.signUp(data)
			.then((response) => {
				setIsAuthorised(true);
				setIsEditorModeOn(true);
			})
			.catch((error) => {
				setIsAuthorised(false);
				setIsEditorModeOn(false);
			})
	}
	const handleLogInButtonClick = () => {
		data.email = document.getElementById('LogInEmail').value;
		data.password = document.getElementById('LogInPas').value;
		authService.logIn(data)
			.then(function (response) {
				setIsAuthorised(true);
				setIsEditorModeOn(true);
				console.log(response)
			})
			.catch(function (error) {
				setIsAuthorised(false);
				setIsEditorModeOn(false);
			})
		dashboardService.loadSavings()
			.then(function (response) {
				let info = JSON.parse(response.data['dashes']);
				setLayout(info.layout);
				setCounter(info.counter);
				setArray(info.widgets);
				setWidgetData(info.data);
				console.log(info)
				console.log(response)
			})
			.catch(function (error) {
				console.log(error);
			})
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
					<Button onClick={handleSignUpButtonClick} borderRadius={0} width="full" mt={4} type="submit">
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
					<Button onClick={handleLogInButtonClick} borderRadius={0} width="full" mt={4} type="submit">
						Log In
					</Button>
				</MenuList>
			</Menu>
		</ButtonGroup>
	);
}
export default Registr;