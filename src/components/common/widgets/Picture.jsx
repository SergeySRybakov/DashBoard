import React from 'react';
import './Picture.css'
import FileUploader from 'devextreme-react/file-uploader';
import { useDispatch, useSelector } from 'react-redux';
import { setWidgetsData } from '../../../reducers/widgetDataReducer';

const Picture = ({ isEditorModeOn, i}) => {
    const dispatch = useDispatch();
    const widgetData = useSelector(state => state.widgetsData.widgetsData);
    const allowedFileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
    let obj = [];
    let dropVisible = widgetData[i] ? false : true;

    const load = (e) => {
        let { file } = e;
        let reader = new FileReader();

        reader.readAsDataURL(file);
        console.log(e)

        reader.onloadend = function () {
            console.log(reader.result);
            obj = Object.assign([], widgetData);
            obj[i] = reader.result;
            dispatch(setWidgetsData(obj));
            console.log(widgetData[i])
        }
    }

    return (
        <div className={`widget-container ${i + 'dropzone-external'}`} style={{objectFit:'contain', display:'flex', justifyContent:'center', verticalAlign:'top', textAlign:'center', marginBlock:'0', width:'100%', height:'100%', position: 'relative', top:'0' }}>
            <div id={`${'dropzone-external' + i}`} style={{objectFit:'contain', display:'flex', justifyContent:'center', verticalAlign:'top', textAlign:'center', marginBlock:'0', width:'100%', height:'100%', position: 'relative', top:'0' }}
             className={`flex-box ${i + 'dropzone-external'} ${isEditorModeOn ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
                {widgetData[i] ? <img style={{maxWidth:'100%', maxHeight:'100%'}} id="dropzone-image" src={widgetData[i]} alt="" /> : <p>nothing</p>}
                {dropVisible
                    ??
                    (<div id={`dropzone-text`} className="flex-box">
                        <span>Drag & Drop the desired file</span>
                        <span>…or click to browse for a file instead.</span>
                    </div>)}
            </div>
            {isEditorModeOn &&
                <FileUploader
                    id={`${i}fileInputBase`}
                    dialogTrigger={`#${'dropzone-external' + i}`}
                    dropZone={`#${'dropzone-external' + i}`}
                    multiple={false}
                    allowedFileExtensions={allowedFileExtensions}
                    uploadMode="instantly"
                    uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
                    visible={false}
                    onUploaded={load}
                ></FileUploader>
            }

        </div>
    )
}

export default Picture