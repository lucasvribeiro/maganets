import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Product } from "./Product";

const addToWishList = jest.fn();
const removeFromWishList = jest.fn();

const mockProduct = { id: 3, sku: 12348, title: "Product Test 4", price: 800 };
const mockWishList = [
  { id: 0, sku: 12345, title: "Product Test 1", price: 500 },
  { id: 1, sku: 12346, title: "Product Test 2", price: 600 },
  { id: 2, sku: 12347, title: "Product Test 3", price: 700 },
];

describe("Product Component", () => {
  it("should render without crashing", () => {
    render(<Product product={mockWishList[0]} wishList={mockWishList} />);
    const product = screen.getByTestId("product");

    expect(product).toBeTruthy();
  });

  it("should render with wishlist marker", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showWishListMarker={true}
      />
    );
    const wishListMarker = screen.getByTestId("wlmarker");

    expect(wishListMarker).toBeInTheDocument();
  });

  it("should render without wishlist marker", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showWishListMarker={false}
      />
    );
    const wishListMarker = screen.queryByTestId("wlmarker");

    expect(wishListMarker).not.toBeTruthy();
  });

  it("should render with removeWishList button", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showRemoveWishListButton={true}
      />
    );
    const removeWishListButton = screen.getByTestId("removewlbtn");

    expect(removeWishListButton).toBeInTheDocument();
  });

  it("should render without removeWishList button", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showRemoveWishListButton={false}
      />
    );
    const removeWishListButton = screen.queryByTestId("removewlbtn");

    expect(removeWishListButton).not.toBeInTheDocument();
  });

  it("should call addToWishList when wishList marker is clicked and product is not on wishList", () => {
    render(
      <Product
        product={mockProduct}
        wishList={mockWishList}
        showWishListMarker={true}
        addToWishList={addToWishList}
      />
    );
    const wishListMarker = screen.getByTestId("wlmarker");
    userEvent.click(wishListMarker);

    expect(addToWishList).toHaveBeenCalled();
  });

  it("should call removeFromWishList when wishList marker is clicked and product is on wishList", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showWishListMarker={true}
        removeFromWishList={removeFromWishList}
      />
    );
    const wishListMarker = screen.getByTestId("wlmarker");
    userEvent.click(wishListMarker);

    expect(removeFromWishList).toHaveBeenCalled();
  });

  it("should call removeFromWishList when remove button is clicked", () => {
    render(
      <Product
        product={mockWishList[0]}
        wishList={mockWishList}
        showRemoveWishListButton={true}
        removeFromWishList={removeFromWishList}
      />
    );
    const removeWishListButton = screen.getByTestId("removewlbtn");
    userEvent.click(removeWishListButton);

    expect(removeFromWishList).toHaveBeenCalled();
  });
});
