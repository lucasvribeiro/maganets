import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getProducts } from "../../services/api";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";
import Badge from "../../components/Badge/Badge";
import ListContainer from "../../components/ListContainer/ListContainer";
import Loader from "../../components/Loader/Loader";
import Empty from "../../components/Empty/Empty";

import "./Home.css";

const Home = (props) => {
  const { wishList, searchValue } = props;

  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  const [visibleProducts, setVisibleProducts] = useState([]);

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
        setLoading(false);
        setProducts(res.data.products);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <Loader loading={loading}>
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

              <Link to="/wish-list">
                <span className="header-link">
                  <i className="fas fa-heart" /> Lista de Desejos
                  <Badge>{wishList.length}</Badge>
                </span>
              </Link>
            </div>
            <div className="header-search-container">
              <SearchBox />
            </div>
          </div>
        </Header>

        <div className="path-container">Home</div>

        <ListContainer>
          {visibleProducts && visibleProducts.length ? (
            visibleProducts.map((product) => (
              <Product
                key={product.sku}
                product={product}
                showWishListMarker={true}
                showRemoveWishListButton={false}
              />
            ))
          ) : (
            <Empty />
          )}
        </ListContainer>
      </Loader>
    </>
  );
};

const mapStateToProps = (store) => ({
  wishList: store.wishListState.wishList,
  searchValue: store.searchValueState.searchValue,
});

export default connect(mapStateToProps)(Home);
