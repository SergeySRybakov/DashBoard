import { React, useState, useEffect } from "react";
import "./Picture.css";
import FileUploader from "devextreme-react/file-uploader";

const Picture = ({ isEditorModeOn, i, data, onChange }) => {
  const allowedFileExtensions = [".jpg", ".jpeg", ".gif", ".png"];

  const [picture, setPicture] = useState(data ?? "");

  useEffect(() => {
    onChange(picture);
  }, [picture]);

  const load = e => {
    let { file } = e;
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setPicture(reader.result);
    };
  };

  return (
    <div className={`widget-container ${i + "dropzone-external"}`}>
      <div
        id={`${"dropzone-external" + i}`}
        className={`flex-box number-dropzone ${i + "dropzone-external"} ${
          isEditorModeOn
            ? "dx-theme-accent-as-border-color dropzone-active"
            : "dx-theme-border-color"
        }`}
      >
        {data ? (
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            id="dropzone-image"
            src={data}
            alt=""
          />
        ) : (
          <div id="drpZone">Drop or input your file</div>
        )}
      </div>
      {isEditorModeOn && (
        <FileUploader
          id={`${i}fileInputBase`}
          dialogTrigger={`#${"dropzone-external" + i}`}
          dropZone={`#${"dropzone-external" + i}`}
          multiple={false}
          allowedFileExtensions={allowedFileExtensions}
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          visible={false}
          onUploaded={load}
        ></FileUploader>
      )}
    </div>
  );
};

export default Picture;
