import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initializeProducts } from "../../actions/index";

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
  const { wishList, filteredProducts, initializeProducts } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setLoading(false);
        initializeProducts(res.data.products);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Loader loading={loading}>
        <Header>
          <div className="header-left-container">
            <h1 className="logo">MagaNets</h1>
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

        <div className="path-container">
          <Link to="/">Home</Link>
        </div>

        <ListContainer>
          {filteredProducts && filteredProducts.length ? (
            filteredProducts.map((product) => (
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
  filteredProducts: store.productsState.filteredProducts,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ initializeProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
