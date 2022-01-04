import { render, screen } from "@testing-library/react";

import Path from "./Path";

describe("Path Component", () => {
  it("should render without crashing", () => {
    render(<Path />);
    const component = screen.getByTestId("path");

    expect(component).toBeInTheDocument();
  });

  it("should render links when have links props", () => {
    render(<Path links={["Link Test"]} />);
    const component = screen.getByText("Link Test");

    expect(component).toBeInTheDocument();
  });
});
