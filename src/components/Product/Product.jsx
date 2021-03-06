import styled from "styled-components";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToWishList, removeFromWishList } from "../../actions/index";

const StyledProduct = styled.div`
  padding: 12px;
  width: 200px;
  height: 280px;
  position: relative;
  text-align: center;

  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.18);
  }

  .product-image {
    max-width: 120px;
  }

  .product-title {
    font-weight: bold;
    height: 42px;
    margin: 16px 0 0 0;
  }

  .product-free-shipping {
    color: #04d483;
    font-size: 0.8rem;
    font-weight: bold;

    & i {
      margin-right: 2px;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }

  .product-price {
    font-weight: bold;
    font-size: 1.2rem;
    color: #ffca00;
  }

  .wish-list-marker {
    position: absolute;
    top: -2px;
    left: 4px;
    cursor: pointer;
  }

  .wish-list-marker:hover {
    > .wl-heart {
      color: #ff1919;
    }

    > .wl-bookmark {
      filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
    }
  }

  .wl-bookmark {
    font-size: 40px;
    color: #222222;

    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    transition: all 0.2s ease;
  }

  .wl-heart {
    font-size: 16px;
    color: ${(props) => (props.isOnWishList ? "#ff1919" : "#ffffff")};

    position: absolute;
    top: 8px;
    left: 6px;

    transition: all 0.2s ease;
  }

  .remove-button {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 24px;

    cursor: pointer;
  }
`;

export const Product = ({
  product,
  showWishListMarker,
  showRemoveWishListButton,

  wishList,
  addToWishList,
  removeFromWishList,
}) => {
  const isOnWishList = (product) => {
    return wishList.filter((p) => p.id === product.id).length ? true : false;
  };

  return (
    <StyledProduct
      data-testid="product"
      isOnWishList={isOnWishList(product)}
      title={product.style}
    >
      {showWishListMarker && (
        <div
          data-testid="wlmarker"
          className="wish-list-marker"
          onClick={
            isOnWishList(product)
              ? () => removeFromWishList(product)
              : () => addToWishList(product)
          }
        >
          <i className="wl-bookmark fas fa-bookmark" />
          <i className="wl-heart fas fa-heart" />
        </div>
      )}

      {showRemoveWishListButton && (
        <div
          data-testid="removewlbtn"
          className="remove-button"
          onClick={() => removeFromWishList(product)}
        >
          <i className="far fa-times-circle" />
        </div>
      )}

      <img className="product-image" src={product.image} alt={product.title} />
      <p className="product-title">{product.title}</p>

      <p className="product-price">
        {product.currencyFormat} {product.price}
      </p>

      {product.isFreeShipping && (
        <span className="product-free-shipping">
          <i className="fas fa-truck" />
          FRETE GR??TIS
        </span>
      )}
    </StyledProduct>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  showWishListMarker: PropTypes.bool,
  showRemoveWishListButton: PropTypes.bool,

  wishList: PropTypes.array,
  addToWishList: PropTypes.func,
  removeFromWishList: PropTypes.func,
};

Product.defaultProps = {
  showWishListMarker: true,
  showRemoveWishListButton: false,
};

const mapStateToProps = (store) => ({
  wishList: store.wishListState.wishList,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addToWishList, removeFromWishList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);
