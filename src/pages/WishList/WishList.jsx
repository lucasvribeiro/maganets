import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import ListContainer from "../../components/ListContainer/ListContainer";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";

const WishList = () => {
  const location = useLocation();
  const [wishList, setWishList] = useState(location.state.wishList);

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const addToWishList = (product) => {
    setWishList(wishList.concat(product));
  };

  const removeFromWishList = (product) => {
    setWishList(wishList.filter((p) => p.id !== product.id));
  };

  const checkIsOnWishList = (product) => {
    return wishList.includes(product);
  };

  const filterProducts = () => {
    setVisibleProducts(
      wishList.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (wishList) filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    if (wishList) setVisibleProducts(wishList);
  }, [wishList]);

  return (
    <div>
      <Header>
        <div className="header-left-container">
          <h2>MagaNets</h2>
        </div>
        <div className="header-right-container">
          <div className="header-links-container">
            <Link to="/">
              <span className="header-link">
                <i className="fas fa-map-marker-alt" /> Cidade: São Paulo
              </span>
            </Link>

            <Link to="/support">
              <span className="header-link">
                <i className="fas fa-phone" /> Central de Atendimento
              </span>
            </Link>

            <Link to="/wish-list" state={{ wishList }}>
              <span className="header-link">
                <i className="fas fa-heart" /> Lista de Desejos
                <Badge>{wishList.length}</Badge>
              </span>
            </Link>
          </div>
          <div className="header-search-container">
            <SearchBox
              placeholder="Buscar produto"
              value={searchValue}
              onChange={onSearchValueChange}
            />
          </div>
        </div>
      </Header>

      <div className="path-container">Home</div>

      <ListContainer>
        {visibleProducts &&
          visibleProducts.map((product) => (
            <Product
              key={product.sku}
              product={product}
              showWishListMarker={false}
              showRemoveWishListButton={true}
              isOnWishList={checkIsOnWishList(product)}
              onAddToWishList={() => addToWishList(product)}
              onRemoveFromWishList={() => removeFromWishList(product)}
            />
          ))}
      </ListContainer>
    </div>
  );
};

export default WishList;
