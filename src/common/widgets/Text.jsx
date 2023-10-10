import { React, useEffect, useRef } from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addWidgetDataElement } from "../../store/reducers/widgetDataReducer";

const Text = ({ isEditorModeOn, i, widgetData }) => {
  const dispatch = useDispatch();

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
            defaultValue={widgetData[i]}
            placeholder={widgetData[i] ?? "Nothing"}
            id={`${i}textWidget`}
            onChange={e => {
              dispatch(addWidgetDataElement({ i, text: e.target.value }));
            }}
          />
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
