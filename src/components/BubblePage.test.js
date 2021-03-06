import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles'

test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  await render(<Bubbles colors={[{}]}/>)
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading