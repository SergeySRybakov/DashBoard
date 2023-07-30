import React from "react";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";
import styles from "./Editor.module.css";

const Editor = ({ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData }) => {
  let numberOfEmptyPanelsInGrid = 12;

  if (layout.length) {
    const maxWidgetYPosition = Math.max(...layout.map((widgdet) => widgdet.y));
    const maxHeightofHighestWidget = Math.max(
      ...layout
        .filter((widget) => widget.y === maxWidgetYPosition)
        .map((widget) => widget.h)
    );
    numberOfEmptyPanelsInGrid =
      (maxWidgetYPosition + maxHeightofHighestWidget + 1) * 6;
  }
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className={styles.emptyPanelsgrid}>
          {Array.from({ length: numberOfEmptyPanelsInGrid }).map((_) => (
            <div className={styles.emptyPanel}></div>
          ))}
        </div>
      </div>
      <div className={styles.widgetLayout}>
        <WidgetGrid {...{ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData }} />
      </div>
    </>
  );
};

export default Editor;
