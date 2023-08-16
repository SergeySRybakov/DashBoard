import React from "react";
import styles from "./WidgetCard.module.css";
import {
	CloseButton,
	IconButton,
	MenuButton,
	Menu,
	MenuList,
	Textarea
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Overview from "../widgets/Overview";
import SimpleArray from "../widgets/SimpleArray";
import Text from "../widgets/Text";
import Card from "../widgets/Card";
import { Button } from "devextreme-react";

const WidgetCard = ({ deleteWidget, i, isEditorModeOn, widgetsArray, setWidgetData, widgetData }) => {
	const displayedWidget = {
		"Overview": <Overview base={widgetData[i] ? widgetData[i][1] : []} complaintsData={widgetData[i] ? widgetData[i][0] : []} />,
		"Simple Array": <SimpleArray columns={widgetData[i] ? widgetData[i][1] : []} dataSource={widgetData[i] ? widgetData[i][0] : []} />,
		"Picture": <Card isEditorModeOn={isEditorModeOn} i={i} setWidgetData={setWidgetData} widgetData={widgetData} />,
		"Text": <Text isEditorModeOn={isEditorModeOn} i={i} widgetData={widgetData} setWidgetData={setWidgetData}/>
	};
/* <Picture isEditorModeOn={isEditorModeOn} i={i} setWidgetData={setWidgetData} widgetData={widgetData} /> */
	return (
		<div
			className={`${styles.WidgetCard} ${isEditorModeOn && styles.WidgetCardInEditMode
				}`}
		>
			<header
				className={`${styles.header} && ${!isEditorModeOn && styles.headerInReadOnlyMode
					}`}
			>
				{isEditorModeOn && (widgetsArray[i] !== 'Text') && (widgetsArray[i] !== 'Picture') && (widgetsArray[i] !== 'Ui') && (<Menu>
					<MenuButton
						as={IconButton}
						aria-label="add-widget-options"
						icon={<AddIcon />}
						variant="outline"
						size={'xs'}
					/>
					<MenuList>
						{(widgetsArray[i] === 'Overview') ?
							<>
								<Textarea
									placeholder='insert data like complaint:data, ...'
									resize={'none'}
									id={`${i}textareaOverview`}
								/>
								<Textarea
									placeholder='insert name of table, interval, percentage interval, constant line percent'
									resize={'none'}
									id={`${i}textareaOverviewBase`}
								/>
								<Button onClick={() => {
									let inf = document.getElementById(`${i}textareaOverview`).value.split(',').map(function (inf) { return inf.trim().split(':') }).map((map) => {
										return {
											complaint: map[0],
											count: +map[1]
										}
									});
									let base = document.getElementById(`${i}textareaOverviewBase`).value.split(',').map((item) => { return item.trim() });
									let obj = Object.assign([], widgetData);
									console.log(typeof(i))
									obj[i] = [inf, base];
									setWidgetData(obj);
								}}>SaveData</Button>
							</> :
							<>
								<Textarea
									placeholder={`Insert column name's`}
									resize={'none'}
									id={`${i}textareaArrayColumns`}
								/>
								<Textarea
									placeholder={`Insert data by spliting lines with ';'`}
									resize={'none'}
									id={`${i}textareaArrayData`} />
								<Button onClick={() => {
									let columns = document.getElementById(`${i}textareaArrayColumns`).value.split(',').map((item) => { return item.trim() });
									let arrayInfo = document.getElementById(`${i}textareaArrayData`).value.split(';').map((arr) => {
										return arr.split(',')
									}).map((element) => {
										return element.map((el) => {
											return el.split(':')
										})
									}).map((element) => {
										return element.map((el) => {
											return {
												[el[0].trim()]: el[1].trim()
											}
										})
									}).map((el) => {
										return Object.assign({}, ...el)
									}).map((item, id) => {
										return {
											'ID': id + 1,
											...item
										}
									})

									console.log(typeof(i))
									console.log(arrayInfo);
									let obj = Object.assign([], widgetData);
									obj[i] = [arrayInfo, columns];
									setWidgetData(obj);
								}}>SaveData</Button>
								<Button onClick={() => { console.log(i); console.log(widgetData[i][1]) }}>CheckData</Button>
							</>}

					</MenuList>
				</Menu>)}
				{isEditorModeOn && <div></div>}
				<div className={styles.title}>{i + widgetsArray[i]}</div>
				{isEditorModeOn && (
					<CloseButton onClick={() => {
						let obj = Object.assign([], widgetData);
						obj[i] = null;
						setWidgetData(obj);
						deleteWidget(i);
					}} size="sm" />
				)}
			</header>
			<div id={i} style={{display:'flex', justifyContent:'center', alignItems:'center'}} className={styles.body}>{displayedWidget[widgetsArray[i]]}</div>
		</div >
	);
};

export default WidgetCard;
