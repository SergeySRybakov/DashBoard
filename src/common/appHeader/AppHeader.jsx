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
} from "@chakra-ui/react";
import styles from "./AppHeader.module.css";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditorModeOn } from "../../store/reducers/editor";
import { useWidgets } from "../../hooks/use-widgets";

const ALL_WIDGET_TYPES = ["Overview", "Simple Array", "Picture", "Text"];

const AppHeader = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const isEditorMode = useSelector(state => state.editor.isEditorModeOn);

  const { addWidget } = useWidgets();

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
              {ALL_WIDGET_TYPES.map(itemType => (
                <MenuItem onClick={() => addWidget(itemType)} key={itemType}>
                  {itemType}
                </MenuItem>
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
