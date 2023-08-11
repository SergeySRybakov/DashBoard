import React from "react";
import { Switch } from "@chakra-ui/switch";
import Registr from '../Registration/Registr';
import Savings from "../Savings/Savings";
import {
	FormControl,
	FormLabel,
	IconButton,
	MenuButton,
	Menu,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import styles from "./AppHeader.module.css";
import { AddIcon } from "@chakra-ui/icons";

const AppHeader = ({ isEditorModeOn, setIsEditorModeOn, addWidget, setLayout, setIsAuthorised, isAuthorised, setWidgetsArray, data, setCounter, setWidgetData }) => {
	const allWidgetOptions = [
		"Overview",
		"Simple Array",
		"Picture",
		"Text"
	];
	/* const availableWidgetOptions = allWidgetOptions.filter(
	  (option) => !layout.some((widget) => widget.i === option)
	); */
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<FormControl display="flex" alignItems="center">
					<FormLabel htmlFor="editor-mode" mb="0">
						Editor Mode
					</FormLabel>
					<Switch
						id="editor-mode"
						isChecked={isEditorModeOn}
						onChange={(e) => {
							if (isAuthorised) setIsEditorModeOn(e.target.checked)
						}}
						className={styles.editorModeSwitch}
					/>
				</FormControl>
				<Savings
					setLayout={setLayout}
					setCounter={setCounter}
					setWidgetsArray={setWidgetsArray}
					setWidgetData={setWidgetData}
					data={data}
				/>
				{isEditorModeOn && (
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="add-widget-options"
							icon={<AddIcon />}
							variant="outline"
						/>
						<MenuList>
							{allWidgetOptions
								.map((item) => (
									<MenuItem onClick={() => {
										addWidget();
										setWidgetsArray(arr => [...arr, `${item}`]);
									}}>
										{item}
									</MenuItem>
								))
							}
						</MenuList>
					</Menu>
				)}
				<Registr
					setLayout={setLayout}
					setIsEditorModeOn={setIsEditorModeOn}
					setIsAuthorised={setIsAuthorised}
					setCounter={setCounter}
					setWidgetsArray={setWidgetsArray}
					setWidgetData={setWidgetData}
				/>
			</nav>
			{/* <ColorModeSwitcher /> */}
		</header>
	);
};

export default AppHeader;
