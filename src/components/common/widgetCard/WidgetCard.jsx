import React from "react";
import styles from "./WidgetCard.module.css";
import { CloseButton, IconButton, MenuButton, Menu, MenuList, Textarea } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Overview from "../widgets/Overview";
import SimpleArray from "../widgets/SimpleArray";
import Picture from "../widgets/Picture";
import Text from "../widgets/Text";
import { Button } from "devextreme-react";
import { useSelector, useDispatch } from "react-redux";
import { deleteWidget } from "../../../store/reducers/layoutReducer";
import { setWidgetsData } from "../../../store/reducers/widgetDataReducer";
import OverviewTextarea from "../widgets/supComp/OverviewTextarea";
import ArrayTextarea from "../widgets/supComp/ArrayTextarea";

const WidgetCard = ({ i }) => {
  const dispatch = useDispatch();
  const isEditorModeOn = useSelector(state => state.editor.isEditorModeOn);
  const widgetsArray = useSelector(state => state.widgetsArray.widgetsArray);
  const widgetData = useSelector(state => state.widgetsData.widgetsData);

  const displayedWidget = {
    Overview: (
      <Overview base={widgetData[i]?.[1] ?? []} complaintsData={widgetData[i]?.[0] ?? []} />
    ),
    "Simple Array": (
      <SimpleArray columns={widgetData[i]?.[1] ?? []} dataSource={widgetData[i]?.[0] ?? []} />
    ),
    Picture: <Picture isEditorModeOn={isEditorModeOn} i={i} widgetData={widgetData} />,
    Text: <Text isEditorModeOn={isEditorModeOn} i={i} widgetData={widgetData} />,
  };

  const handleWidgetCloseButtonClick = () => {
    let obj = Object.assign([], widgetData);
    obj[i] = null;
    dispatch(setWidgetsData(obj));
    dispatch(deleteWidget(i));
  };
  // (widgetsArray[i] === "SimpleArray" || widgetsArray[i] === "Picture") ? justifyContent: "space-between" : justifyContent: "space-between"

  return (
    <div className={`${styles.WidgetCard} ${isEditorModeOn && styles.WidgetCardInEditMode}`}>
      <header
        style={{
          display: "flex",
          justifyContent:
            widgetsArray[i] === "Text" || widgetsArray[i] === "Picture"
              ? "center"
              : "space-between",
        }}
        className={`${styles.header} && ${!isEditorModeOn && styles.headerInReadOnlyMode}`}
      >
        {isEditorModeOn && widgetsArray[i] !== "Text" && widgetsArray[i] !== "Picture" && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="add-widget-options"
              icon={<AddIcon />}
              variant="outline"
              size={"xs"}
            />
            <MenuList>
              {widgetsArray[i] === "Overview" ? (
                <OverviewTextarea i={i} widgetData={widgetData} />
              ) : (
                <ArrayTextarea i={i} widgetData={widgetData} />
              )}
            </MenuList>
          </Menu>
        )}
        <div className={styles.title}>{+i + 1 + " / " + widgetsArray[i]}</div>
        {isEditorModeOn && <CloseButton onClick={handleWidgetCloseButtonClick} size="sm" />}
      </header>
      <div
        id={i}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        className={styles.body}
      >
        {displayedWidget[widgetsArray[i]]}
      </div>
    </div>
  );
};

export default WidgetCard;
