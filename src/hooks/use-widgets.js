import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidgetsData } from "../store/reducers/widgets-data";
import { v4 as uuid } from "uuid";

export function useWidgets() {
  const widgetsCombinedData = useSelector(state => state.widgetsData.widgetsData);
  const dispatch = useDispatch();

  const layout = useMemo(
    () => widgetsCombinedData.map(({ i, x, y, w, h }) => ({ i, x, y, w, h })),
    [widgetsCombinedData],
  );

  const widgets = useMemo(
    () => Object.fromEntries(widgetsCombinedData.map(({ i, type, data }) => [i, { type, data }])),
    [widgetsCombinedData],
  );

  const updateLayout = useCallback(
    layout => {
      const combinedData = layout.map(element => ({ ...element, ...widgets[element.i] }));
      dispatch(setWidgetsData(combinedData));
    },
    [dispatch, layout, widgets],
  );

  const updateWidgetData = useCallback(
    (widgetId, data) => {
      const updated = widgetsCombinedData.map(element =>
        element.i === widgetId ? { ...element, data } : element,
      );
      dispatch(setWidgetsData(updated));
    },
    [dispatch, layout, widgetsCombinedData],
  );

  const deleteWidget = useCallback(
    widgetId => {
      const updated = widgetsCombinedData.filter(({ i }) => i !== widgetId);
      dispatch(setWidgetsData(updated));
    },
    [dispatch, layout, widgetsCombinedData],
  );

  const addWidget = useCallback(
    widgetType => {
      const NUMBER_OF_COLUMNS = 6;

      const lastWidgetPosition = widgetsCombinedData[widgetsCombinedData.length - 1]
        ? widgetsCombinedData[widgetsCombinedData.length - 1]
        : { x: 2, y: 2 };

      dispatch(
        setWidgetsData([
          ...widgetsCombinedData,
          {
            w: 2,
            h: 2,
            i: uuid(),
            x: +lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2 ? 1 : +lastWidgetPosition.x,
            y:
              +lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
                ? +lastWidgetPosition.y + 2
                : +lastWidgetPosition.y + 2,
            type: widgetType,
            data: null,
          },
        ]),
      );
    },
    [dispatch, widgetsCombinedData],
  );

  return {
    layout,
    widgets,
    updateLayout,
    updateWidgetData,
    deleteWidget,
    addWidget,
  };
}
