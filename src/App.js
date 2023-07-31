import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { useState } from "react";
import Editor from "./pages/editor/Editor";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./App.module.css";
import AppHeader from "./components/common/appHeader/AppHeader";
import "./App.css";

export const App = () => {

	const NUMBER_OF_COLUMNS = 4;
	const [isEditorModeOn, setIsEditorModeOn] = useState(true);
	const [layout, setLayout] = useState([]);
	const [isAuthorised, setAuthorised] = useState(true);
	const [counter, setCounter] = useState(1);
	const [selectedWidget, setWidget] = useState('');
	const [widgetsArray, setArray] = useState([]);
	const [widgetData, setWidgetData] = useState([]);

	/**
	 * @description Add a new widget add the end of the current widget layout.
	 * @param i index/identifer of widget
	 */


	let data = {
		'layout': layout,
		'widgets': widgetsArray,
		'counter': counter,
		'data': widgetData ? widgetData : []
	}

	const addWidget = () => {
		if (layout.length) {
			const lastWidgetPosition = layout[layout.length - 1];
			console.log(layout);
			setCounter(counter + 1);
			return setLayout((currentLayout) => [
				...currentLayout,
				{
					i: counter,
					x: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
						? 0
						: lastWidgetPosition.x + 2,
					y: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
						? lastWidgetPosition.y + 2
						: lastWidgetPosition.y,
					w: 2,
					h: 2
				},
			]);
		}
		setLayout([{ i: 0, x: 0, y: 0, w: 2, h: 2 }]);
	};
	/**
	 * @description Delete widget.
	 * @param i index/identifer of widget
	 */
	const deleteWidget = (i) => setLayout((currentLayout) => currentLayout.filter((widget) => widget.i !== i));
	return (
		<ChakraProvider theme={theme}>

			<div className={styles.App}>
				<AppHeader
					{...{ isEditorModeOn, layout, setIsEditorModeOn, addWidget, setLayout, setAuthorised, isAuthorised, setWidget, widgetsArray, setArray, data, setCounter, setWidgetData }}
				/>
				<body className={styles.body}>
					{isEditorModeOn ? (
						<Editor
							layout={layout}
							setLayout={setLayout}
							deleteWidget={deleteWidget}
							isEditorModeOn={isEditorModeOn}
							widgetsArray={widgetsArray}
							setWidgetData={setWidgetData}
							widgetData={widgetData}
						/>
					) : (
						<Dashboard
							layout={layout}
							setLayout={setLayout}
							deleteWidget={deleteWidget}
							isEditorModeOn={isEditorModeOn}
							widgetsArray={widgetsArray}
							setWidgetData={setWidgetData}
							widgetData={widgetData}
						/>
					)}
				</body>
			</div>
		</ChakraProvider>
	);
}