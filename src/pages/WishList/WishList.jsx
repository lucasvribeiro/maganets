import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshProducts } from "../../actions/index";

import Header from "../../components/Header/Header";
import ListContainer from "../../components/ListContainer/ListContainer";
import Product from "../../components/Product/Product";
import Empty from "../../components/Empty/Empty";

const WishList = (props) => {
  const { wishList, filteredProducts, refreshProducts, searchValue } = props;

  useEffect(() => {
    refreshProducts(wishList, searchValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishList]);

  return (
    <>
      <Header />

      <div className="path-container">
        <Link to="/">Home</Link>
        {">"}
        <Link to="/wish-list">Lista de Desejos</Link>
      </div>

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
