import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import Editor from "./components/common/Editor/Editor";
import styles from "./App.module.css";
import AppHeader from "./components/common/appHeader/AppHeader";
import "./App.css";
import { useSelector } from "react-redux";

export const App = () => {
	const counter = useSelector(state => state.counter.counter);//
	const layout = useSelector(state => state.layout.layout);//
	const widgetsArray = useSelector(state => state.widgetsArray.widgetsArray);//
	const widgetData = useSelector(state => state.widgetsData.widgetsData);//

	let data = {
		'layout': layout,
		'widgets': widgetsArray,
		'counter': counter,
		'data': widgetData ? widgetData : []
	}

	return (
		<ChakraProvider theme={theme}>

			<div className={styles.App}>
				<AppHeader
					{...{ data }}
				/>
				<body className={styles.body}>
					<Editor />
				</body>
			</div>
		</ChakraProvider>
	);
}