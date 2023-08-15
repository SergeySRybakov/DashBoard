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
import { useDispatch, useSelector } from "react-redux";
import { setIsEditorModeOn } from "../../../reducers/editorReducer";
import { setWidgetsArray } from "../../../reducers/widgetsReducer";
import { increment } from "../../../reducers/counterReducer";
import { addWidgets } from "../../../reducers/layoutReducer";

const AppHeader = ({ data }) => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);//
	const layout = useSelector(state => state.layout.layout);
	const isAuth = useSelector(state => state.auth.isAuth);
	const isEditorMode = useSelector(state => state.editor.isEditorModeOn);

	const addWidget = () => {
		dispatch(addWidgets(counter));
		dispatch(increment());
		console.log(layout);
	}

	const allWidgetOptions = [
		"Overview",
		"Simple Array",
		"Picture",
		"Text"
	];
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<FormControl display="flex" alignItems="center">
					<FormLabel htmlFor="editor-mode" mb="0">
						Editor Mode
					</FormLabel>
					<Switch
						id="editor-mode"
						isChecked={isEditorMode}
						onChange={(e) => {
							if (isAuth) dispatch(setIsEditorModeOn(e.target.checked))
						}}
						className={styles.editorModeSwitch}
					/>
				</FormControl>
				<Savings
					data={data}
				/>
				{isEditorMode && (
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
										dispatch(setWidgetsArray(item));
									}}>
										{item}
									</MenuItem>
								))
							}
						</MenuList>
					</Menu>
				)}
				<Registr />
			</nav>
			{/* <ColorModeSwitcher /> */}
		</header>
	);
};

export default AppHeader;
