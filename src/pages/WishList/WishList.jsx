import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshProducts } from "../../actions/index";

import Header from "../../components/Header/Header";
import ListContainer from "../../components/ListContainer/ListContainer";
import Product from "../../components/Product/Product";
import Empty from "../../components/Empty/Empty";
import Path from "../../components/Path/Path";
import Badge from "../../components/Badge/Badge";
import SearchBox from "../../components/SearchBox/SearchBox";

const WishList = (props) => {
  const { wishList, filteredProducts, refreshProducts, searchValue } = props;

  useEffect(() => {
    refreshProducts(wishList, searchValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishList]);

  return (
    <>
      <Header
        searchBox={<SearchBox />}
        logo={
          <Link to="/">
            <h1 className="logo">maganets</h1>
          </Link>
        }
        links={[
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
        ]}
      />

      <Path
        links={[
          <Link to="/">Home</Link>,
          <Link to="/wish-list">Lista de Desejos</Link>,
        ]}
      />

      <ListContainer>
        {filteredProducts && filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Product
              key={product.sku}
              product={product}
              showWishListMarker={false}
              showRemoveWishListButton={true}
            />
          ))
        ) : (
          <Empty />
        )}
      </ListContainer>
    </>
  );
};

const mapStateToProps = (store) => ({
  wishList: store.wishListState.wishList,
  filteredProducts: store.productsState.filteredProducts,
  searchValue: store.searchValueState.searchValue,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ refreshProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
