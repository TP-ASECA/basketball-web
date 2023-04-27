import React from "react";
import { render } from "@testing-library/react";
import SaveMatchButton from "../../Components/SaveMatchButton.js";

describe("SaveMatchButton", () => {
  test("renders a button with the text 'Save AddMatchScreen'", () => {
    const { getByText } = render(<SaveMatchButton />);
    const saveButton = getByText("Save AddMatchScreen");
    expect(saveButton).toBeInTheDocument();
    expect(saveButton.tagName).toBe("BUTTON");
  });
});