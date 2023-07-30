import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import WidgetCard from "../widgetCard/WidgetCard";
import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const WidgetGrid = ({ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData}) => {
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6}
      isDraggable={isEditorModeOn}
      isResizable={isEditorModeOn}
      onLayoutChange={(layout) => setLayout(layout)}
    >
      {layout.map((item) => (
        <div key={item.i}>
          <WidgetCard
            data-grid={item}
            deleteWidget={deleteWidget}
            i={item.i}
            isEditorModeOn={isEditorModeOn}
            widgetsArray={widgetsArray}
            setWidgetData={setWidgetData}
            widgetData={widgetData}
          />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default WidgetGrid;
