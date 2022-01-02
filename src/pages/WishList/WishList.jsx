import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshProducts } from "../../actions/index";

import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import ListContainer from "../../components/ListContainer/ListContainer";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";
import Empty from "../../components/Empty/Empty";

const WishList = (props) => {
  const { wishList, filteredProducts, refreshProducts, searchValue } = props;

  useEffect(() => {
    refreshProducts(wishList, searchValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishList]);

  return (
    <>
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
