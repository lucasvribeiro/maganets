import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initializeProducts } from "../../actions/index";

import { getProducts } from "../../services/api/api";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import ListContainer from "../../components/ListContainer/ListContainer";
import Loader from "../../components/Loader/Loader";
import Empty from "../../components/Empty/Empty";
import Path from "../../components/Path/Path";
import SearchBox from "../../components/SearchBox/SearchBox";
import Badge from "../../components/Badge/Badge";

const Home = (props) => {
  const { filteredProducts, initializeProducts, wishList } = props;
  const [loading, setLoading] = useState(true);

  const headerLinks = [
    <Link to="/location">
      <span className="link">
        <i className="fas fa-map-marker-alt" />
        <span className="link-prefix">Cidade:</span> São Paulo
      </span>
    </Link>,

    <Link to="/support">
      <span className="link">
        <i className="fas fa-phone" />
        <span className="link-prefix">Central de </span>Atendimento
      </span>
    </Link>,

    <Link to="/wish-list">
      <span className="link">
        <i className="fas fa-heart" />
        <span className="link-prefix">Lista de </span>Desejos
        <Badge>{wishList.length}</Badge>
      </span>
    </Link>,
  ];

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
        <Header
          searchBox={<SearchBox />}
          links={headerLinks}
          logo={
            <Link to="/">
              <h1 className="logo">maganets</h1>
            </Link>
          }
        />

        <Path links={[<Link to="/">Home</Link>]} />

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
  wishList: store.wishListState.wishList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ initializeProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
