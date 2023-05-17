import React from "react";
import {render, screen} from "@testing-library/react";
import ClubCard from "../../Components/ClubCard";

describe("Club card render", () => {
    test("Renders club name", () => {
        render(<ClubCard clubName={"Nicks"} />)
        const clubNameText = screen.getByText(/Nicks/i);
        expect(clubNameText).toBeInTheDocument();
    })
})