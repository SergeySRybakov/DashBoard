import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import Editor from "./components/common/Editor/Editor";
import styles from "./App.module.css";
import AppHeader from "./components/common/appHeader/AppHeader";
import "./App.css";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className={styles.App}>
        <AppHeader />
        <div className={styles.body}>
          <Editor />
        </div>
      </div>
    </ChakraProvider>
  );
};
