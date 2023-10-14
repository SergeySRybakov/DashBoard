import React from "react";
import "./Picture.css";
import FileUploader from "devextreme-react/file-uploader";
import { useDispatch } from "react-redux";
import { setWidgetsData, addWidgetDataElement } from "../../store/reducers/widgetDataReducer";

const Picture = ({ isEditorModeOn, i, widgetData }) => {
  const dispatch = useDispatch();
  const allowedFileExtensions = [".jpg", ".jpeg", ".gif", ".png"];
  let obj = [];

  const load = e => {
    let { file } = e;
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      /* obj = Object.assign([], widgetData);
      obj[i] = reader.result;
      dispatch(setWidgetsData(obj)); */
      dispatch(addWidgetDataElement({ i, text: reader.result }));
    };
  };

  return (
    <div
      className={`widget-container ${i + "dropzone-external"}`}
      style={{
        objectFit: "contain",
        display: "flex",
        justifyContent: "center",
        verticalAlign: "top",
        textAlign: "center",
        marginBlock: "0",
        width: "100%",
        height: "100%",
        position: "relative",
        top: "0",
      }}
    >
      <div
        id={`${"dropzone-external" + i}`}
        style={{
          objectFit: "contain",
          display: "flex",
          justifyContent: "center",
          verticalAlign: "top",
          textAlign: "center",
          marginBlock: "0",
          width: "100%",
          height: "100%",
          position: "relative",
          top: "0",
        }}
        className={`flex-box ${i + "dropzone-external"} ${
          isEditorModeOn
            ? "dx-theme-accent-as-border-color dropzone-active"
            : "dx-theme-border-color"
        }`}
      >
        {widgetData[i] ? (
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            id="dropzone-image"
            src={widgetData[i]}
            alt=""
          />
        ) : (
          <div
            id="drpZone"
            style={{
              border: "dashed",
              padding: "1%",
              objectFit: "contain",
              display: "flex",
              justifyContent: "center",
              verticalAlign: "top",
              textAlign: "center",
              marginBlock: "0",
              width: "100%",
              maxHeight: "95%",
              top: "0",
              fontSize: "2vw",
            }}
          >
            Drop or input your file
          </div>
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
