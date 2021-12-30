import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.div``;

const Header = ({ children, className }) => {
  return <StyledHeader className={className}>{children}</StyledHeader>;
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.deafultProps = {
  className: PropTypes.string,
};

export default Header;