import axios from "axios";
import { getProducts } from "./api";

jest.mock("axios");

const mockProducts = [
  { id: 0, sku: 12345, title: "Product Test 1", price: 500 },
  { id: 1, sku: 12346, title: "Product Test 2", price: 600 },
  { id: 2, sku: 12347, title: "Product Test 3", price: 700 },
];

describe("api service", () => {
  it("should get the products from API", async () => {
    axios.get.mockResolvedValueOnce(mockProducts);

    const result = await getProducts();

    expect(result).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_API_URL);
  });
});
