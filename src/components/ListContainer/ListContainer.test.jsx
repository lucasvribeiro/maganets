import { render, screen } from "@testing-library/react";

import ListContainer from "./ListContainer";

describe("ListContainer Component", () => {
  it("should render without crashing", () => {
    render(<ListContainer />);
    const listContainer = screen.getByTestId("list-container");

    expect(listContainer).toBeTruthy();
  });

  it("should render with a content when have children", () => {
    render(<ListContainer>Container Element</ListContainer>);
    const listContainer = screen.getByText("Container Element");

    expect(listContainer).toBeInTheDocument();
  });
});
