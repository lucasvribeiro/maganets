export const getWishList = () => {
  const wishListLocalStorage = localStorage.getItem("wish-list");
  return JSON.parse(wishListLocalStorage) || [];
};

export const setWishList = (wishList) => {
  localStorage.setItem("wish-list", JSON.stringify(wishList));
};
