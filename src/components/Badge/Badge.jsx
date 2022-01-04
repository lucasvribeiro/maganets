import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBadge = styled.span`
  padding: 1px 5px;
  width: fit-content;
  border-radius: 16px;

  font-size: 0.8rem;
  font-weight: bold;
  background-color: #13abe1;

  margin: 0 4px;
`;

const Badge = ({ children }) => {
  return <StyledBadge data-testid="badge">{children}</StyledBadge>;
};

Badge.propTypes = {
  children: PropTypes.any,
};

Badge.defaultProps = {};

export default Badge;
