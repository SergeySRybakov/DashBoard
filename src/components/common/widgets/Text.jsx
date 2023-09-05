import React from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWidgetsData } from "../../../store/reducers/widgetDataReducer";

const Text = ({ isEditorModeOn, i, widgetData }) => {
  const dispatch = useDispatch();
  let textData = "Nothing";

  const handleAddingTextButtonClick = () => {
    textData = document.getElementById(`${i}textWidget`).value;
    let obj = Object.assign([], widgetData);
    obj[i] = textData;
    dispatch(setWidgetsData(obj));
  };

  const loadText = () => {
    return widgetData[i];
  };
  return (
    <>
      {isEditorModeOn ? (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "95%" }}>
          <Textarea
            maxHeight={"100%"}
            height={"95%"}
            placeholder={widgetData[i]}
            id={`${i}textWidget`}
            onChange={handleAddingTextButtonClick}
          />
        </div>
      ) : (
        <p
          style={{
            whiteSpace: "normal",
            width: "100%",
            overflow: "auto",
            height: "100%",
            textAlign: "center",
          }}
        >
          {widgetData[i]}
        </p>
      )}
    </>
  );
};

export default Text;
