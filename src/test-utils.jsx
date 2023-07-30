import * as React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider, theme } from "@chakra-ui/react";
const AllProviders = ({ children }) => (React.createElement(ChakraProvider, { theme: theme }, children));
const customRender = (ui, options) => render(ui, Object.assign({ wrapper: AllProviders }, options));
export { customRender as render };
