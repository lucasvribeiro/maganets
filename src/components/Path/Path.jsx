import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPath = styled.div`
  padding: 30px 50px;

  & a {
    color: #222222;
    font-weight: bold;
    margin: 0 8px;
  }
`;

const Path = ({ links }) => {
  return (
    <StyledPath>
      {links.map((link, index) => (
        <>
          {link} {index !== links.length - 1 && ">"}
        </>
      ))}
    </StyledPath>
  );
};

Path.propTypes = {
  links: PropTypes.array.isRequired,
};

Path.defaultProps = {};

export default Path;