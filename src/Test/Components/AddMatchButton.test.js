import React from "react";
import { render, screen } from "@testing-library/react";
import AddMatchButton from "../../Components/AddMatchButton";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import '@testing-library/jest-dom'


describe("AddMatchButton", () => {
  render(
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<AddMatchButton />}/>
        </Routes>
      </BrowserRouter>
);
  test("renders a button with the text '+ Load AddMatchScreen'", () => {
    const addButton = screen.getByText(/ Load Match/i);
    expect(addButton).toBeInTheDocument();
    expect(addButton.tagName).toBe("BUTTON");
  });
});
