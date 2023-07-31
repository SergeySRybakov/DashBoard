import React, { PureComponent } from "react";
import Diagram, {
  ContextMenu,
  ContextToolbox,
  PropertiesPanel,
  Group,
  Tab,
  HistoryToolbar,
  ViewToolbar,
  MainToolbar,
  Command,
  Toolbox,
} from 'devextreme-react/diagram';
import 'whatwg-fetch';
import './Ui.css';

import json from './diagram-flow.json'

const pageCommands = ['pageColor'];
const menuCommands = ['bringToFront', 'sendToBack', 'lock', 'unlock'];

export default class Example extends PureComponent {
  constructor(props) {
    super(props);

    this.diagramRef = React.createRef();
  }


  componentDidMount() {
    const diagram = this.diagramRef.current.instance;
    diagram.import(JSON.stringify(json));
	console.log(this.diagramRef)
  }

  render() {
    return (
      <Diagram width={'100%'} id="diagram" ref={this.diagramRef} onCustomCommand={this.onCustomCommand}>
        <ContextMenu enabled={true} commands={menuCommands} />
        <ContextToolbox enabled={true} category="flowchart" shapeIconsPerRow={5} width={200} />
        <PropertiesPanel visibility="visible">
          <Tab>
            <Group title="Page Properties" commands={pageCommands} />
          </Tab>
        </PropertiesPanel>
        <HistoryToolbar visible={false} />
        <ViewToolbar visible={true} />
        <MainToolbar visible={true}>
          <Command name="undo" />
          <Command name="redo" />
          <Command name="separator" />
          <Command name="fontName" />
          <Command name="fontSize" />
          <Command name="separator" />
          <Command name="bold" />
          <Command name="italic" />
          <Command name="underline" />
          <Command name="separator" />
          <Command name="fontColor" />
          <Command name="lineColor" />
          <Command name="fillColor" />
          <Command name="separator" />
          <Command name="clear" icon="clearsquare" text="Clear Diagram" />
        </MainToolbar>
        <Toolbox visibility="visible" showSearch={false} shapeIconsPerRow={4} width={220}>
          <Group category="general" title="General" />
          <Group category="flowchart" title="Flowchart" expanded={true} />
        </Toolbox>
      </Diagram>
    );
  }
  }
  