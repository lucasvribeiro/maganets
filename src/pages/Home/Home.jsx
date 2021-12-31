import React, { useEffect, useState } from "react";

import { getProducts } from "../../services/api";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./Home.css";
import ListContainer from "../../components/ListContainer/ListContainer";
import Badge from "../../components/Badge/Badge";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState();
  const [wishList, setWishList] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const addToWishList = (product) => {
    setWishList(wishList.concat(product));
  };

  const removeFromWishList = (product) => {
    setWishList(wishList.filter((p) => p.id !== product.id));
  };

  const checkIsOnWishList = (product) => {
    return wishList.includes(product);
  };

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterProducts = () => {
    setVisibleProducts(
      products.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (products) setVisibleProducts(products);
  }, [products]);

  useEffect(() => {
    if (products) filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              showWishListMarker={true}
              showRemoveWishListButton={false}
              isOnWishList={checkIsOnWishList(product)}
              onAddToWishList={() => addToWishList(product)}
              onRemoveFromWishList={() => removeFromWishList(product)}
            />
          ))}
      </ListContainer>
    </div>
  );
};

export default Home;
