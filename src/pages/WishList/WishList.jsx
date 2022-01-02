import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeFromWishList } from "../../actions/index";

import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import ListContainer from "../../components/ListContainer/ListContainer";
import Product from "../../components/Product/Product";
import SearchBox from "../../components/SearchBox/SearchBox";
import Empty from "../../components/Empty/Empty";

const WishList = (props) => {
  const { wishList, removeFromWishList } = props;

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const checkIsOnWishList = (product) => {
    return wishList.filter((p) => p.id === product.id).length ? true : false;
  };

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
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
        {visibleProducts && visibleProducts.length ? (
          visibleProducts.map((product) => (
            <Product
              key={product.sku}
              product={product}
              showWishListMarker={false}
              showRemoveWishListButton={true}
              isOnWishList={checkIsOnWishList(product)}
              onRemoveFromWishList={() => removeFromWishList(product)}
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeFromWishList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
