import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
beforeEach(() => {
    render(React.createElement(App, null));
});
test("renders app", () => {
    expect(screen.getByText(/editor mode/i)).toBeInTheDocument();
});
