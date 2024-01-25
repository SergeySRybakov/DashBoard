import React from "react";
import WidgetGrid from "../widgetGrid/WidgetGrid";
import styles from "./Editor.module.css";
import { useSelector } from "react-redux";
import _ from "lodash";

const Editor = () => {
  let numberOfEmptyPanelsInGrid = 12;
  const layout = useSelector(state => state.widgetsData.widgetsData);
  const isEditorModeOn = useSelector(state => state.editor.isEditorModeOn);

  if (layout.length) {
    const maxWidgetYPosition = Math.max(...layout.map(widgdet => widgdet.y));

    const maxHeightofHighestWidget = Math.max(
      ...layout.filter(widget => widget.y === maxWidgetYPosition).map(widget => widget.h),
    );
    numberOfEmptyPanelsInGrid = (maxWidgetYPosition + maxHeightofHighestWidget + 1) * 6;
  }
  return (
    <>
      {isEditorModeOn ? (
        <>
          <div style={{ position: "relative" }}>
            <div className={styles.emptyPanelsgrid}>
              {Array.from({ length: numberOfEmptyPanelsInGrid }).map((_, i) => (
                <div className={styles.emptyPanel} key={i}></div>
              ))}
            </div>
          </div>
          <div className={styles.widgetLayout}>
            <WidgetGrid layout={layout} />
          </div>
        </>
      ) : (
        <WidgetGrid layout={layout} />
      )}
    </>
  );
};

export default Editor;
