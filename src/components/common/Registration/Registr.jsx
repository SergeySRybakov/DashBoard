import React from 'react';
import { Button, ButtonGroup, } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { authService } from '../../../api/auth.service';
import { dashboardService } from '../../../api/dashboard.service';
import {
	Menu,
	MenuButton,
	MenuList
} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setLayout } from '../../../store/reducers/layoutReducer';
import { setIsEditorModeOn } from '../../../store/reducers/editorReducer';
import { setIsAuth } from '../../../store/reducers/authReducer';
import { setWidgetsArray } from '../../../store/reducers/widgetsReducer';
import { setWidgetsData } from '../../../store/reducers/widgetDataReducer';

const Registr = () => {
	const dispatch = useDispatch();
	const handleSignUpButtonClick = () => {
		const email = document.getElementById('EmailSignUp').value;
		const password = document.getElementById('PasSignUp').value;
		authService.signUp({email, password})
			.then((response) => {
				dispatch(setIsAuth(true));
				dispatch(setIsEditorModeOn(true));
			})
			.catch((error) => {
				dispatch(setIsAuth(false));
				dispatch(setIsEditorModeOn(false));
				alert('This username is already occupied')
			})
	}
	const handleLogInButtonClick = () => {
		const email = document.getElementById('LogInEmail').value;
		const password = document.getElementById('LogInPas').value;
		authService.logIn({email, password})
			.then(function (response) {
				dispatch(setIsAuth(true));
				dispatch(setIsEditorModeOn(true));
				console.log(response)
			})
			.catch(function (error) {
				dispatch(setIsAuth(false));
				dispatch(setIsEditorModeOn(false));
				alert("Incorrect login or username")
			})
		dashboardService.loadSavings()
			.then(function (info) {
				dispatch(setLayout(info.layout));
				dispatch(setWidgetsArray(info.widgets));
				dispatch(setWidgetsData(info.data));
				console.log(info)
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
						<FormLabel>Username</FormLabel>
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
						<FormLabel>Username</FormLabel>
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