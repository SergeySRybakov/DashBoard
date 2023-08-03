import React from "react";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";


const Dashboard = ({ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData, setCounter, setArray }) => {
  return (
    <WidgetGrid
      {...{ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData }}
    />
  );
};

export default Dashboard;
