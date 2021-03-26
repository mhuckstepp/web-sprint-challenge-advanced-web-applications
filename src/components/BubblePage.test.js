import React from "react";
import {
  getAllByTestId,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import BubblePage from "./BubblePage";
import mockFetchBubbles from "../tools/fetchBubbles";
jest.mock("../tools/fetchBubbles");

test("Renders BubblePage without errors", async () => {
  let res = await mockFetchBubbles.mockResolvedValueOnce([
    { color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
    { color: "limegreen", code: { hex: "#99ddbc" }, id: 2 },
    { color: "aqua", code: { hex: "#00ffff" }, id: 3 },
    { color: "lilac", code: { hex: "#9a99dd" }, id: 5 },
    { color: "softpink", code: { hex: "#dd99ba" }, id: 6 },
    { color: "bisque", code: { hex: "#dd9a99" }, id: 7 },
    { color: "blue", code: { hex: "#6093ca" }, id: 10 },
    { color: "blueviolet", code: { hex: "#8a2be2" }, id: 11 },
  ]);

  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // arrange test - feed mock data and render element

  let res = await mockFetchBubbles.mockResolvedValueOnce([
    { color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
    { color: "limegreen", code: { hex: "#99ddbc" }, id: 2 },
    { color: "aqua", code: { hex: "#00ffff" }, id: 3 },
    { color: "lilac", code: { hex: "#9a99dd" }, id: 5 },
    { color: "softpink", code: { hex: "#dd99ba" }, id: 6 },
    { color: "bisque", code: { hex: "#dd9a99" }, id: 7 },
    { color: "blue", code: { hex: "#6093ca" }, id: 10 },
    { color: "blueviolet", code: { hex: "#8a2be2" }, id: 11 },
  ]);
  render(<BubblePage />);

  // Act - find rendered colors on the screen
  const data = await screen.findAllByTestId("bubble");

  // Assert - check the colors and rendered and the right amount of them exist
  expect(data).not.toBeNull();
  expect(data).toHaveLength(8);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
