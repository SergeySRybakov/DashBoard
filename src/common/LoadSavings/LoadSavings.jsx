import React from "react";
import { Button } from "@chakra-ui/react";
import axios from "axios";

const LoadSavings = ({ setLayout, setCounter, setArray, setWidgetData }) => {
  return (
    <Button
      fontSize={"x-small"}
      colorScheme="blue"
      size="lg"
      variant="solid"
      onClick={async () => {
        await axios
          .get("./static/api/loadSavings.php")
          .then(function (response) {
            let info = JSON.parse(response.data["dashes"]);
            setLayout(
              JSON.parse(response.data["dashes"]).layout
                ? JSON.parse(response.data["dashes"]).layout
                : [],
            );
            setCounter(info.counter);
            setArray(info.widgets);
            setWidgetData(info.data);
          })
          .catch(function (error) {
            // обработка ошибки
          });
      }}
    >
      Load savings
    </Button>
  );
};

export default LoadSavings;
