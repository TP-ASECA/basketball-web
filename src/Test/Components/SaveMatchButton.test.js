import React from "react";
import { render } from "@testing-library/react";
import SaveMatchButton from "../../Components/SaveMatchButton.js";

describe("SaveMatchButton", () => {
  test("renders a button with the text 'Save Match'", () => {
    const { getByText } = render(<SaveMatchButton />);
    const saveButton = getByText("Save Match");
    expect(saveButton).toBeInTheDocument();
    expect(saveButton.tagName).toBe("BUTTON");
  });
});