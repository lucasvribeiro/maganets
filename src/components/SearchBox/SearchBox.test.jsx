import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import { SearchBox } from "./SearchBox";

const changeSearchValue = jest.fn();
const filterProducts = jest.fn();

describe("SearchBox Component", () => {
  it("should render without crashing", () => {
    render(
      <SearchBox
        changeSearchValue={changeSearchValue}
        filterProducts={filterProducts}
      />
    );
    const searchBox = screen.getByTestId("searchbox");

    expect(searchBox).toBeTruthy();
  });

  it("should render with placeholder when has placeholder in props", () => {
    render(
      <SearchBox
        placeholder="Placeholder Test"
        changeSearchValue={changeSearchValue}
        filterProducts={filterProducts}
      />
    );
    const searchbox = screen.getByPlaceholderText("Placeholder Test");

    expect(searchbox).toBeInTheDocument();
  });

  it("should render a disabled searchbox when disabled is true", () => {
    render(
      <SearchBox
        disabled={true}
        changeSearchValue={changeSearchValue}
        filterProducts={filterProducts}
      />
    );
    const searchbox = screen.getByTestId("searchbox");

    expect(searchbox).toHaveAttribute("disabled");
  });

  it("should render an enabled searchbox when disabled is false", () => {
    render(
      <SearchBox
        disabled={false}
        changeSearchValue={changeSearchValue}
        filterProducts={filterProducts}
      />
    );
    const searchbox = screen.getByTestId("searchbox");

    expect(searchbox).not.toHaveAttribute("disabled");
  });

  it("should call changeSearchValue when value changed", () => {
    render(
      <SearchBox
        changeSearchValue={changeSearchValue}
        filterProducts={filterProducts}
      />
    );
    const searchbox = screen.getByTestId("searchbox");

    fireEvent.change(searchbox, { target: { value: "Test" } });

    expect(changeSearchValue).toHaveBeenCalled();
  });
});
