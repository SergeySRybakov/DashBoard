import React from "react";
import { authService } from "../../api/auth.service";
import { dashboardService } from "../../api/dashboard.service";
import {
  Menu,
  MenuButton,
  MenuList,
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setLayout } from "../../store/reducers/layoutReducer";
import { setIsEditorModeOn } from "../../store/reducers/editorReducer";
import { setIsAuth } from "../../store/reducers/authReducer";
import { setWidgetsArray } from "../../store/reducers/widgetsReducer";
import { setWidgetsData } from "../../store/reducers/widgetDataReducer";

const Registr = () => {
  const dispatch = useDispatch();

  const handleSignUpButtonClick = () => {
    const email = document.getElementById("EmailSignUp").value;
    const password = document.getElementById("PasSignUp").value;
    authService
      .signUp({ email, password })
      .then(info => {
        dispatch(setIsAuth(true));
        dispatch(setIsEditorModeOn(true));
        console.log(info);
      })
      .catch(() => {
        dispatch(setIsAuth(false));
        dispatch(setIsEditorModeOn(false));
        alert("This username is already occupied");
      });
  };

  const handleLogInButtonClick = () => {
    const email = document.getElementById("LogInEmail").value;
    const password = document.getElementById("LogInPas").value;
    authService
      .logIn({ email, password })
      .then(function (info) {
        dispatch(setIsAuth(true));
        dispatch(setIsEditorModeOn(true));
      })
      .catch(function () {
        dispatch(setIsAuth(false));
        dispatch(setIsEditorModeOn(false));
        alert("Incorrect login or username");
      });
    dashboardService
      .loadSavings()
      .then(function (info) {
        dispatch(setLayout(info.layout));
        dispatch(setWidgetsArray(info.widgets));
        dispatch(setWidgetsData(info.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <ButtonGroup spacing={4} direction="row" align="center">
      <Menu>
        <MenuButton as={Button}>SignUp</MenuButton>
        <MenuList>
          <FormControl isRequired>
            <FormLabel htmlFor="EmailSignUp">Username</FormLabel>
            <Input id="EmailSignUp" borderRadius={0} placeholder="Email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="PasSignUp">Password</FormLabel>
            <Input id="PasSignUp" borderRadius={0} placeholder="Password" type="password" />
          </FormControl>
          <Button
            onClick={handleSignUpButtonClick}
            borderRadius={0}
            width="full"
            mt={4}
            type="submit"
          >
            Sign In
          </Button>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button}>LogIn</MenuButton>
        <MenuList>
          <FormControl isRequired>
            <FormLabel htmlFor="LogInEmail">Username</FormLabel>
            <Input id="LogInEmail" borderRadius={0} placeholder="Email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="LogInPas">Password</FormLabel>
            <Input id="LogInPas" borderRadius={0} placeholder="Password" type="password" />
          </FormControl>
          <Button
            onClick={handleLogInButtonClick}
            borderRadius={0}
            width="full"
            mt={4}
            type="submit"
          >
            Log In
          </Button>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
};
export default Registr;
