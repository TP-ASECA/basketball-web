import React from "react";
import { render } from "@testing-library/react";
import AddMatchButton from "../../Components/AddMatchButton";

describe("AddMatchButton", () => {
  test("renders a button with the text '+ Load Match'", () => {
    const { getByText } = render(<AddMatchButton />);
    const addButton = getByText("+ Load Match");
    expect(addButton).toBeInTheDocument();
    expect(addButton.tagName).toBe("BUTTON");
  });

  test("renders a link to '/match'", () => {
    const { getByRole } = render(<AddMatchButton />);
    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "/match");
  });
});