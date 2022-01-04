import styled from "styled-components";
import PropTypes from "prop-types";

const ListContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 32px 60px;
  width: fit-content;
  max-width: 1400px;
  padding: 0 50px;
  box-sizing: border-box;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, auto);
    grid-gap: 32px 16px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const ListContainer = ({ children }) => {
  return (
    <ListContainerStyled data-testid="list-container">
      {children}
    </ListContainerStyled>
  );
};

ListContainer.propTypes = {
  children: PropTypes.any,
};

ListContainer.defaultProps = {};

export default ListContainer;
