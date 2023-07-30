import React from "react";
import { Switch } from "@chakra-ui/switch";
import SaveEditings from "../SaveEditings/SaveEditings";
import Registr from '../Registration/Registr';
import LoadSavings from "../LoadSavings/LoadSavings";
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

const AppHeader = ({ isEditorModeOn, layout, setIsEditorModeOn, addWidget, setLayout, setAuthorised, isAuthorised, setWidget, widgetsArray, setArray, data, setCounter, setWidgetData }) => {
	const allWidgetOptions = [
		"Ui",
		"Overview",
		"Simple Array",
		"Picture"
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
							if (isAuthorised) {
								setIsEditorModeOn(e.target.checked);
							}
						}}
						className={styles.editorModeSwitch}
					/>
				</FormControl>
				<SaveEditings
					data={data}
				/>
				<LoadSavings
					setLayout={setLayout}
					setCounter={setCounter}
					setWidget={setWidget}
					widgetsArray={widgetsArray}
					setArray={setArray}
					setWidgetData={setWidgetData}
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
							{allWidgetOptions.length ? (
								allWidgetOptions	
									.map((item) => (
										<MenuItem onClick={() => {
											addWidget();
											setWidget(item);
											setArray(arr => [...arr, `${item}`]);
											}}>
											{item}
										</MenuItem>
									))
							) : (
								<MenuItem className={styles.noMoreOptions}>
									No options available.
								</MenuItem>
							)}
						</MenuList>
					</Menu>
				)}
				<Registr
					setLayout={setLayout}
					setIsEditorModeOn={setIsEditorModeOn}
					setAuthorised={setAuthorised}
					setCounter={setCounter}
					setArray={setArray}
					setWidgetData={setWidgetData}
				/>
			</nav>
			{/* <ColorModeSwitcher /> */}
		</header>
	);
};

export default AppHeader;
