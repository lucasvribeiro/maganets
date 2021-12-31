import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProduct = styled.div`
  padding: 12px;
  width: 200px;
  height: 260px;
  position: relative;

  text-align: center;

  border: 1px solid #dddddd;
  border-radius: 4px;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;

  .product-image {
    max-width: 120px;
  }

  .product-title {
    font-weight: bold;
    height: 42px;
  }

  .product-price {
    font-weight: bold;
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
  }

  .wl-bookmark {
    font-size: 40px;
    color: #222222;
  }

  .wl-heart {
    font-size: 16px;
    color: ${(props) => (props.isOnWishList ? "#ff1919" : "#ffffff")};

    position: absolute;
    top: 8px;
    left: 6px;

    transition: all 0.3s ease;
  }

  .remove-button {
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 24px;

    cursor: pointer;
  }
`;

const Product = ({
  key,
  product,
  isOnWishList,
  showWishListMarker,
  showRemoveWishListButton,
  onAddToWishList,
  onRemoveFromWishList,
}) => {
  return (
    <StyledProduct key={key} isOnWishList={isOnWishList}>
      {showWishListMarker && (
        <div
          className="wish-list-marker"
          onClick={isOnWishList ? onRemoveFromWishList : onAddToWishList}
        >
          <i className="wl-bookmark fas fa-bookmark" />
          <i className="wl-heart fas fa-heart" />
        </div>
      )}

      {showRemoveWishListButton && (
        <div className="remove-button" onClick={onRemoveFromWishList}>
          <i className="far fa-times-circle" />
        </div>
      )}

      <img className="product-image" src={product.image} alt={product.title} />

      <p className="product-title">{product.title}</p>
      <p className="product-price">
        {product.currencyFormat} {product.price}
      </p>
    </StyledProduct>
  );
};

Product.propTypes = {
  key: PropTypes.any,
  product: PropTypes.object,
  isOnWishList: PropTypes.bool,
  showWishListMarker: PropTypes.bool,
  showRemoveWishListButton: PropTypes.bool,
  onAddToWishList: PropTypes.func,
  onRemoveFromWishList: PropTypes.func,
};

Product.deafultProps = {
  showWishListMarker: true,
  showRemoveWishListButton: false,
};

export default Product;
