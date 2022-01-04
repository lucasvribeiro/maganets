import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPath = styled.div`
  padding: 30px 50px;

  a {
    color: #222222;
    font-weight: bold;
    margin: 0 8px;
    transition: all 0.3s ease;

    &:hover {
      color: #5a2d82;
    }
  }
`;

const Path = ({ links }) => {
  return (
    <StyledPath data-testid="path">
      {links &&
        links.map((link, index) => (
          <span key={index}>
            {link} {index !== links.length - 1 && ">"}
          </span>
        ))}
    </StyledPath>
  );
};

Path.propTypes = {
  links: PropTypes.array,
};

Path.defaultProps = {};

export default Path;
