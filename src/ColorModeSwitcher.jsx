import * as React from "react";
import { useColorMode, useColorModeValue, IconButton, Tooltip, } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
export const ColorModeSwitcher = (props) => {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    return (React.createElement(Tooltip, { label: `Switch to ${text} mode` },
        React.createElement(IconButton, Object.assign({ 
        size: "md",
        fontSize: "lg",
        variant: "ghost",
        color: "current",
        marginLeft: "2",
        onClick: toggleColorMode, icon: React.createElement(SwitchIcon, null), "aria-label": `Switch to ${text} mode` }, props))));
};
