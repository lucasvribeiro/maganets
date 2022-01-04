import { render, screen } from "@testing-library/react";

import { Product } from "./Product";

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
});
