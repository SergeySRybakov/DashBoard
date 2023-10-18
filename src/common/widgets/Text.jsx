import { React, useState, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addWidgetDataElement } from "../../store/reducers/widgetDataReducer";

const Text = ({ isEditorModeOn, i, widgetData }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(widgetData[i] ?? "");

  useEffect(() => {
    dispatch(addWidgetDataElement({ i, text: text }));
  }, [text]);

  if (isEditorModeOn) {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
        <Textarea
          maxHeight={"100%"}
          height={"100%"}
          defaultValue={widgetData[i]}
          placeholder={widgetData[i] ?? "Nothing"}
          id={`${i}textWidget`}
          onChange={e => {
            setText(e.target.value);
          }}
        />
      </div>
    );
  }

  return (
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
  );
};

export default Text;
