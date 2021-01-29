import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { fetchBubbles as mockFetchBubbles } from '../utils/fetchBubbles';

jest.mock('../utils/fetchBubbles');

const newBubbles = [
  { code: { hex: "#ddd9a99" }, color: "bisque", id: 7 },
  { code: { hex: "#6093ca" }, color: "blue", id: 10 },
  { code: { hex: "#8a2bea" }, color: "blueviolet", id: 11 },
];

test("Renders BubblePage without errors", async () => {
  mockFetchBubbles.mockResolvedValue(newBubbles);
  render(<BubblePage />);


const bubbles = screen.findByText(/bubble/i);
  expect(await bubbles).toBeInTheDocument();
});
//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading