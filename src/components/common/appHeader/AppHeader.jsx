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
import { setIsEditorModeOn } from "../../../store/reducers/editorReducer";
import { addWidgetToArray } from "../../../store/reducers/widgetsReducer";
import { addWidgets } from "../../../store/reducers/layoutReducer";

const AppHeader = () => {
	const dispatch = useDispatch();
	const layout = useSelector(state => state.layout.layout);
	const isAuth = useSelector(state => state.auth.isAuth);
	const isEditorMode = useSelector(state => state.editor.isEditorModeOn);

	const addWidget = (item) => {
		const NUMBER_OF_COLUMNS = 6;
		const lastWidgetPosition = layout[layout.length - 1] ?? 1;
		dispatch(addWidgets([
			...layout,
			{
				i: layout[layout.length - 1] ? (+layout[layout.length - 1].i + 1) : 0,
				x: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
					? 0
					: lastWidgetPosition.x + 2,
				y: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
					? lastWidgetPosition.y + 2
					: lastWidgetPosition.y + 2,
				w: 2,
				h: 2
			},
		]));
		dispatch(addWidgetToArray(item));
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
				<Savings />
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
									<MenuItem onClick={() => addWidget(item)}>
										{item}
									</MenuItem>
								))
							}
						</MenuList>
					</Menu>
				)}
				<Registr />
			</nav>
		</header>
	);
};

export default AppHeader;