import React from "react";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";


const Dashboard = ({ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData  }) => {
  return (
    <WidgetGrid
      {...{ layout, setLayout, deleteWidget, isEditorModeOn, widgetsArray, setWidgetData, widgetData  }}
    />
  );
};

export default Dashboard;
