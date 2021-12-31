import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBadge = styled.span`
  padding: 1px 5px;
  width: fit-content;
  border-radius: 16px;

  font-size: 0.8rem;
  font-weight: bold;
  background-color: #370f53;

  margin: 0 4px;
`;

const Badge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

Badge.propTypes = {
  children: PropTypes.any,
};

Badge.deafultProps = {};

export default Badge;
