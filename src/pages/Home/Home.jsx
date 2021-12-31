import React, { useEffect, useState } from "react";

import { getProducts } from "../../services/api";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";

import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState();
  const [wishList, setWishList] = useState([]);

  const addToWishList = (product) => {
    setWishList(wishList.concat(product));
  };

  const removeFromWishList = (product) => {
    setWishList(wishList.filter((p) => p.id !== product.id));
  };

  const checkIsOnWishList = (product) => {
    return wishList.includes(product);
  };

  useEffect(() => {
    console.log(wishList);
  }, [wishList]);

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
        <div className="header-lef-container">
          <h2>MagaNets</h2>
        </div>
        <div className="header-right-container">
          <div className="header-links-container">
            <span className="header-link">
              <i className="fas fa-map-marker-alt" /> Cidade: São Paulo
            </span>

            <span className="header-link">
              <i className="fas fa-phone" /> Central de Atendimento
            </span>

            <span className="header-link">
              <i className="fas fa-heart" /> Lista de Desejos ({wishList.length}
              )
            </span>
          </div>
          <div className="header-search-container">
            <SearchBox placeholder="Buscar produto" />
          </div>
        </div>
      </Header>

      <div className="home-products-container">
        {products &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              showWishListMarker={true}
              showRemoveWishListButton={false}
              isOnWishList={checkIsOnWishList(product)}
              onAddToWishList={() => addToWishList(product)}
              onRemoveFromWishList={() => removeFromWishList(product)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
