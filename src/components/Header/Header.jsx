import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.div`
  height: fit-content;
  min-height: 25vh;
  width: 100vw;
  background: #5a2d82;
  border-top: 10px solid #370f53;
  color: #ffffff;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

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
