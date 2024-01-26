import React from "react";
import { Button } from "@chakra-ui/react";
import { dashboardService } from "../../api/dashboard.service";
import { useDispatch, useSelector } from "react-redux";
import { setWidgetsData } from "../../store/reducers/widgets-data";

const LoadSavings = () => {
  const dispatch = useDispatch();
  const widgetData = useSelector(state => state.widgetsData.widgetsData);

  const handleLoadSavingsButtonClick = () => {
    dashboardService
      .loadSavings()
      .then(info => {
        dispatch(setWidgetsData(info));
      })
      .catch(() => {
        //error
      });
  };

  const handleSaveButtonClick = () => {
    dashboardService
      .SaveEditings(widgetData)
      .then(() => {
        //
      })
      .catch(() => {
        //error
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
