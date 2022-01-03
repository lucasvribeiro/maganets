import { render, screen } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge", () => {
  it("should have to render without crashing", () => {
    render(<Badge>10</Badge>);

    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
