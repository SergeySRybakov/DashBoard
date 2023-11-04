import { React, useState, useEffect } from "react";
import { Textarea } from "@chakra-ui/react";
import "./Text.css";

const Text = ({ isEditorModeOn, data, onChange }) => {
  const [text, setText] = useState(data ?? "");

  useEffect(() => {
    onChange(text);
  }, [text]);

  if (isEditorModeOn) {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
        <Textarea
          value={text}
          /* defaultValue={data} */
          placeholder={data ?? "Nothing"}
          onChange={e => {
            setText(e.target.value);
          }}
        />
      </div>
    );
  }

  return <p className="text-widget-p">{data}</p>;
};

export default Text;
