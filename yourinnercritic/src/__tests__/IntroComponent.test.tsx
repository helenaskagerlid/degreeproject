import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../pages/Home";

describe("IntroComponent related tests", () => {
  test("When clicking the start button the CriticThoughtsComponent should be displayed", async () => {
    //assign
    render(<Home />);

    //act
    const startButton = screen.getByRole("button", {
      name: /get started$/i,
    });

    //assert
    expect(
      screen.queryByRole("heading", {
        name: /Step 1: Your inner Critic's Thoughts$/i,
      })
    ).toBeFalsy();

    //act
    await userEvent.click(startButton);

    const criticThoughtHeading = await screen.findAllByRole("heading", {
      name: /Step 1: Your inner Ciritic's Thoughts$/i,
    });

    //assert
    expect(criticThoughtHeading).toBeTruthy();
  });
});
