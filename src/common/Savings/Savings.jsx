import React from "react";
import { Button } from "@chakra-ui/react";
import { dashboardService } from "../../api/dashboard.service";
import { useDispatch, useSelector } from "react-redux";
import { setLayout } from "../../store/reducers/layoutReducer";
import { setWidgetsArray } from "../../store/reducers/widgetsReducer";
import { setWidgetsData } from "../../store/reducers/widgetDataReducer";

const LoadSavings = () => {
  const dispatch = useDispatch();
  const layout = useSelector(state => state.layout.layout);
  const widgetsArray = useSelector(state => state.widgetsArray.widgetsArray);
  const widgetData = useSelector(state => state.widgetsData.widgetsData);

  const handleLoadSavingsButtonClick = () => {
    dashboardService
      .loadSavings()
      .then(info => {
        dispatch(setLayout(info.layout));
        dispatch(setWidgetsArray(info.widgets));
        dispatch(setWidgetsData(info.data));
        console.log(info);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSaveButtonClick = () => {
    dashboardService
      .SaveEditings({
        layout: layout, //по идее можно было просто написать layout вместо 'layout': ..., но так выглядит красивее, как по мне
        widgets: widgetsArray,
        data: widgetData ?? [],
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Button
        fontSize={"x-small"}
        colorScheme="blue"
        size="lg"
        variant="solid"
        onClick={handleLoadSavingsButtonClick}
      >
        Load savings
      </Button>
      <Button colorScheme="blue" size="lg" variant="solid" onClick={handleSaveButtonClick}>
        Save
      </Button>
    </>
  );
};

export default LoadSavings;
