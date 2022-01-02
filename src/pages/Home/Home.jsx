import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initializeProducts } from "../../actions/index";

import { getProducts } from "../../services/api";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import ListContainer from "../../components/ListContainer/ListContainer";
import Loader from "../../components/Loader/Loader";
import Empty from "../../components/Empty/Empty";

import "./Home.css";

const Home = (props) => {
  const { filteredProducts, initializeProducts } = props;

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
        <Header />

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
  filteredProducts: store.productsState.filteredProducts,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ initializeProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
