import React from "react";
import { Switch } from "@chakra-ui/switch";
import Registr from "../Registration/Register";
import Savings from "../Savings/Savings";
import {
  FormControl,
  FormLabel,
  IconButton,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import styles from "./AppHeader.module.css";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditorModeOn } from "../../store/reducers/editorReducer";
import { addWidgetToArray } from "../../store/reducers/widgetsReducer";
import { setLayout } from "../../store/reducers/layoutReducer";

const AppHeader = () => {
  const dispatch = useDispatch();
  const layout = useSelector(state => state.layout.layout);
  const isAuth = useSelector(state => state.auth.isAuth);
  const isEditorMode = useSelector(state => state.editor.isEditorModeOn);
  const widgetsArray = useSelector(state => state.widgetsArray.widgetsArray);

  const addWidget = item => {
    const NUMBER_OF_COLUMNS = 6;

    const lastWidgetPosition = layout[layout.length - 1]
      ? layout[layout.length - 1]
      : { x: 2, y: 2 };
    dispatch(
      setLayout([
        ...layout,
        {
          w: 2,
          h: 2,
          i: widgetsArray.length ? +widgetsArray.length : 0,
          x: +lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2 ? 1 : +lastWidgetPosition.x,
          y:
            +lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
              ? +lastWidgetPosition.y + 2
              : +lastWidgetPosition.y + 2,
        },
      ]),
    );
    dispatch(addWidgetToArray(item));
  };

  const allWidgetOptions = ["Overview", "Simple Array", "Picture", "Text"];
  return (
    <header
      className={styles.header}
      style={{
        border: "1px solid rgb(224 217 217)",
        borderBottomRightRadius: "10px",
        width: "auto",
        height: "60px",
      }}
    >
      <nav className={styles.nav}>
        <FormControl display="flex" alignItems="center" width="auto">
          <FormLabel htmlFor="editor-mode" mb="0">
            Editor Mode
          </FormLabel>
          <Switch
            id="editor-mode"
            isChecked={isEditorMode}
            onChange={e => {
              if (isAuth) {
                dispatch(setIsEditorModeOn(e.target.checked));
              }
            }}
            className={styles.editorModeSwitch}
          />
        </FormControl>
        <Savings />
        {isEditorMode && (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="add-widget-options"
              icon={<AddIcon />}
              variant="outline"
            />
            <MenuList>
              {allWidgetOptions.map(item => (
                <MenuItem onClick={() => addWidget(item)}>{item}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}
        <Registr />
      </nav>
    </header>
  );
};

export default AppHeader;
