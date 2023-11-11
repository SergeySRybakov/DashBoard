import { React, useState, useEffect } from "react";
import "./Picture.css";
import { v4 as uuidv4 } from "uuid";
import FileUploader from "devextreme-react/file-uploader";
import cn from "classnames";

const Picture = ({ isEditorModeOn, data, onChange }) => {
  const allowedFileExtensions = [".jpg", ".jpeg", ".gif", ".png", ".webp"];

  const [picture, setPicture] = useState(data ?? "");
  const pictureId = uuidv4();

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
    <div className={`widget-container ${pictureId + "dropzone-external"}`}>
      <div
        id={`${"dropzone-external" + pictureId}`}
        className={cn("flex-box number-dropzone", `${pictureId + "dropzone-external"}`, {
          "dx-theme-accent-as-border-color dropzone-active": isEditorModeOn,
          "dx-theme-border-color": !isEditorModeOn,
        })}
      >
        {data ? (
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            id="dropzone-image"
            src={data}
            alt="your file"
          />
        ) : (
          <div id="drpZone">Drop or input your file</div>
        )}
      </div>
      {isEditorModeOn && (
        <FileUploader
          id={`${pictureId}fileInputBase`}
          dialogTrigger={`#${"dropzone-external" + pictureId}`}
          dropZone={`#${"dropzone-external" + pictureId}`}
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
