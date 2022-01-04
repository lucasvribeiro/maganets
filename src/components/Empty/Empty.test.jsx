import { render, screen } from "@testing-library/react";

import Empty from "./Empty";

describe("Empty Component", () => {
  it("should render without crashing", () => {
    render(<Empty />);
    const empty = screen.getByTestId("empty");

    expect(empty).toBeTruthy();
  });

  it("should render with text when has message prop", () => {
    render(<Empty message="Empty Test" />);
    const empty = screen.getByText("Empty Test");

    expect(empty).toBeInTheDocument();
  });
});
