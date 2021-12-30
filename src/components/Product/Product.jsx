import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProduct = styled.div``;

const Product = ({ children, className }) => {
  return <StyledProduct className={className}>{children}</StyledProduct>;
};

Product.propTypes = {
  className: PropTypes.string,
};

Product.deafultProps = {
  className: PropTypes.string,
};

export default Product;