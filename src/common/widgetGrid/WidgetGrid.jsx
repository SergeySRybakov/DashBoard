import RGL, { WidthProvider } from "react-grid-layout";
import WidgetCard from "../widgetCard/WidgetCard";
import "react-grid-layout/css/styles.css";
import { useSelector } from "react-redux";
import { useWidgets } from "../../hooks/use-widgets";

const ReactGridLayout = WidthProvider(RGL);

const WidgetGrid = ({ layout }) => {
  const isEditorModeOn = useSelector(state => state.editor.isEditorModeOn);
  const { updateLayout } = useWidgets();

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6}
      isDraggable={isEditorModeOn}
      isResizable={isEditorModeOn}
      onLayoutChange={updateLayout}
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
