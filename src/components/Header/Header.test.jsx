import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header Component", () => {
  it("should render without crashing", () => {
    render(<Header />);
    const header = screen.getByTestId("header");

    expect(header).toBeTruthy();
  });

  it("should render with a logo when have logo prop", () => {
    render(<Header logo={"Logo Test"} />);
    const logo = screen.getByText("Logo Test");

    expect(logo).toBeInTheDocument();
  });

  it("should render links when have links prop", () => {
    render(<Header links={["Link Test 1", "Link Test 2"]} />);
    const link1 = screen.getByText("Link Test 1");
    const link2 = screen.getByText("Link Test 2");

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
  });

  it("should render search box when have searchBox prop", () => {
    render(<Header searchBox={<div>Search Box Test</div>} />);
    const searchBox = screen.getByText("Search Box Test");

    expect(searchBox).toBeInTheDocument();
  });
});
