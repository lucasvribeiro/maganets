import { render, screen } from "@testing-library/react";

import Loader from "./Loader";

describe("Loader Component", () => {
  it("should render without crashing", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");

    expect(loader).toBeTruthy();
  });

  it("should render with content when has children", () => {
    render(<Loader>Content Test</Loader>);
    const loader = screen.getByText("Content Test");

    expect(loader).toBeInTheDocument();
  });
});
