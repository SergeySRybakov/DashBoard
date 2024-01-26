import React, { useMemo } from "react";
import styles from "./WidgetCard.module.css";
import { CloseButton, IconButton, MenuButton, Menu, MenuList, Textarea } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Overview from "../widgets/Overview";
import SimpleArray from "../widgets/SimpleArray";
import Picture from "../widgets/Picture";
import Text from "../widgets/Text";
import { useSelector } from "react-redux";
import { useWidgets } from "../../hooks/use-widgets";

import OverviewTextarea from "../widgets/supComp/OverviewTextarea";
import ArrayTextarea from "../widgets/supComp/ArrayTextarea";
import { Button } from "devextreme-react";

const WidgetCard = ({ i }) => {
  const isEditorModeOn = useSelector(state => state.editor.isEditorModeOn);

  const { widgets, updateWidgetData, deleteWidget } = useWidgets();

  const { data: widgetData, type } = useMemo(
    () => widgets[i] ?? { data: null, type: "Unknown" },
    [widgets, i],
  );

  /* console.log(i);
  console.log(widgetData); */

  const displayedWidget = {
    Overview: (
      <Overview
        base={widgetData?.[1] ?? ["pizza", 200, 20, 70]}
        complaintsData={
          widgetData?.[0] ?? [
            { complaint: "Cold pizza", count: 780 },
            { complaint: "Not enough cheese", count: 120 },
            { complaint: "Underbaked or Overbaked", count: 52 },
            { complaint: "Delayed delivery", count: 1123 },
            { complaint: "Damaged pizza", count: 321 },
            { complaint: "Incorrect billing", count: 89 },
            { complaint: "Wrong size delivered", count: 222 },
          ]
        }
      />
    ),
    "Simple Array": (
      <SimpleArray
        columns={widgetData?.[1] ?? ["CompanyName", "City", "State", "Phone", "Fax"]}
        dataSource={
          widgetData?.[0] ?? [
            {
              ID: 1,
              CompanyName: "Super Mart of the West",
              City: "Bentonville",
              State: "Arkansas",
              Phone: "(800) 555-2797",
              Fax: "(800) 555-2171",
            },
            {
              ID: 2,
              CompanyName: "Electronics Depot",
              City: "Atlanta",
              State: "Georgia",
              Phone: "(800) 595-3232",
              Fax: "(800) 595-3231",
            },
            {
              ID: 3,
              CompanyName: "K&S Music",
              City: "Minneapolis",
              State: "Minnesota",
              Phone: "(612) 304-6073",
              Fax: "(612) 304-6074",
            },
            {
              ID: 4,
              CompanyName: "Tom's Club",
              City: "Issaquah",
              State: "Washington",
              Phone: "(800) 955-2292",
              Fax: "(800) 955-2293",
            },
            {
              ID: 5,
              CompanyName: "E-Mart",
              City: "Hoffman Estates",
              State: "Illinois",
              Phone: "(847) 286-2500",
              Fax: "(847) 286-2501",
            },
          ]
        }
      />
    ),
    Picture: (
      <Picture
        isEditorModeOn={isEditorModeOn}
        data={widgetData}
        onChange={data => updateWidgetData(i, data)}
      />
    ),
    Text: (
      <Text
        isEditorModeOn={isEditorModeOn}
        data={widgetData}
        onChange={data => updateWidgetData(i, data)}
      />
    ),
    Unknown: <p>Неизвестный тип виджета </p>,
  };

  const handleWidgetCloseButtonClick = () => {
    deleteWidget(i);
  };

  return (
    <div className={`${styles.WidgetCard} ${isEditorModeOn && styles.WidgetCardInEditMode}`}>
      <header
        style={{
          position: "relative",
          display: "flex",
          justifyContent: !isEditorModeOn ? "center" : "space-between",
        }}
        className={`${styles.header} && ${!isEditorModeOn && styles.headerInReadOnlyMode}`}
      >
        {isEditorModeOn && type !== "Text" && type !== "Picture" ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="add-widget-options"
              icon={<AddIcon />}
              variant="outline"
              size={"xs"}
            />
            <MenuList>
              {type === "Overview" ? (
                <OverviewTextarea data={[]} onChange={data => updateWidgetData(i, data)} />
              ) : (
                <ArrayTextarea data={[]} onChange={data => updateWidgetData(i, data)} />
              )}
            </MenuList>
          </Menu>
        ) : (
          <div></div>
        )}
        <div className={styles.title}>{i + 1 + " / " + type}</div>
        {isEditorModeOn && <CloseButton onClick={handleWidgetCloseButtonClick} size="sm" />}
      </header>
      <div
        id={i}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        className={styles.body}
      >
        {displayedWidget[type]}
      </div>
    </div>
  );
};

export default WidgetCard;
