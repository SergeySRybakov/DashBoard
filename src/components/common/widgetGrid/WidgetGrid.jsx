import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import WidgetCard from "../widgetCard/WidgetCard";
import "react-grid-layout/css/styles.css";
import { setLayout } from "../../../store/reducers/layoutReducer";
import { useDispatch, useSelector } from "react-redux";

const ReactGridLayout = WidthProvider(RGL);

const WidgetGrid = ({ layout }) => {
  const dispatch = useDispatch();
  const isEditorModeOn = useSelector(state => state.editor.isEditorModeOn);
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6}
      isDraggable={isEditorModeOn}
      isResizable={isEditorModeOn}
      onLayoutChange={layout => dispatch(setLayout(layout))}
    >
      {layout.map(item => (
        <div key={item.i}>
          <WidgetCard data-grid={item} i={item.i} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default WidgetGrid;
