import React from "react";
import {render, screen} from "@testing-library/react";
import PlayerCard from "../../Components/PlayerCard";
jest.mock("axios")

describe("Player card render test", () => {
    render(
        <PlayerCard
            name={"Lebron James"}
        />
    )
    test("renders player name", () => {
        const playerName = screen.getByText(/Lebron James/i);
        expect(playerName).toBeInTheDocument()
    })
})