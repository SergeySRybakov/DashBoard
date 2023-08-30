import React from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setWidgetsData } from "../../../store/reducers/widgetDataReducer";

const Text = ({ isEditorModeOn, i, widgetData }) => {
  const dispatch = useDispatch();
  let textData = "Nothing";

  const handleAddingTextButtomClick = () => {
    textData = document.getElementById(`${i}textWidget`).value;
    let obj = Object.assign([], widgetData);
    obj[i] = textData;
    dispatch(setWidgetsData(obj));
  };

  const loadText = () => {
    document.getElementById(`${i}textWidget`).value = widgetData[i];
  };
  return (
    <>
      {isEditorModeOn ? (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
          <Textarea
            maxHeight={"100%"}
            height={"100%"}
            placeholder={widgetData[i]}
            id={`${i}textWidget`}
          />
          <Button
            border={"1px solid #858585"}
            borderRadius={0}
            onClick={handleAddingTextButtomClick}
          >
            SaveText
          </Button>
          <Button border={"1px solid #858585"} borderRadius={0} onClick={loadText}>
            LoadText
          </Button>
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
