import { render, screen } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge Component", () => {
  it("should render without crashing", () => {
    render(<Badge />);
    const badge = screen.getByTestId("badge");

    expect(badge).toBeTruthy();
  });

  it("should render with a text when have children", () => {
    render(<Badge>10</Badge>);
    const badge = screen.getByText(10);

    expect(badge).toBeInTheDocument();
  });
});
