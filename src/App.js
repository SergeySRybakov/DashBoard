import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import Editor from "./components/common/Editor/Editor";
import styles from "./App.module.css";
import AppHeader from "./components/common/appHeader/AppHeader";
import "./App.css";
import { useSelector } from "react-redux";

export const App = () => {

<<<<<<< HEAD

=======
	const NUMBER_OF_COLUMNS = 6;
	const [isEditorModeOn, setIsEditorModeOn] = useState(true);
	const [layout, setLayout] = useState([]);
	const [isAuthorised, setIsAuthorised] = useState(true);
	const [widgetsArray, setWidgetsArray] = useState([]);
	const [widgetData, setWidgetData] = useState([]);

	let data = {
		'layout': layout,
		'widgets': widgetsArray,
		'data': widgetData ? widgetData : []
	}

	const addWidget = () => {
		if (layout.length) {
			const lastWidgetPosition = layout[layout.length - 1];
			console.log(layout);
			console.log(lastWidgetPosition)
			return setLayout((currentLayout) => [
				...currentLayout,
				{
					i: +currentLayout[currentLayout.length - 1].i + 1,
					x: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
						? 0
						: lastWidgetPosition.x + 2,
					y: lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
						? lastWidgetPosition.y + 2
						: lastWidgetPosition.y + 2,
					w: 2,
					h: 2
				},
			]);
		}
		/* setLayout([{ i: 0, x: 1, y: 0, w: 2, h: 2 }]); */
		setLayout([{x: 0, y: 0, i: 0, w: 2, h: 2}])
	};

	const deleteWidget = (i) => setLayout((currentLayout) => currentLayout.filter((widget) => widget.i !== i));
>>>>>>> main
	return (
		<ChakraProvider theme={theme}>

			<div className={styles.App}>
<<<<<<< HEAD
				<AppHeader />
=======
				<AppHeader
					{...{ isEditorModeOn, setIsEditorModeOn, addWidget, setLayout, setIsAuthorised, isAuthorised, setWidgetsArray, data, setWidgetData }}
				/>
>>>>>>> main
				<body className={styles.body}>
					<Editor />
				</body>
			</div>
		</ChakraProvider>
	);
}