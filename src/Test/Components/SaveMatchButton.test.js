import React from "react";
import { render, screen } from "@testing-library/react";
import SaveMatchButton from "../../Components/SaveMatchButton.js";
import '@testing-library/jest-dom'

describe("SaveMatchButton", () => {
  test("renders a button with the text 'Save Match'", () => {
    render(<SaveMatchButton />);
    const saveButton = screen.getByText(/Save Match/i);
    expect(saveButton).toBeInTheDocument();
    expect(saveButton.tagName).toBe("BUTTON");
  });
});