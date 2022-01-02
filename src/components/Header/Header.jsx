import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.div`
  height: fit-content;
  width: 100vw;
  background: #5a2d82;
  border-top: 10px solid #370f53;
  color: #ffffff;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    padding: 30px 30px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = {
  children: PropTypes.any,
};

Header.defaultProps = {};

export default Header;
