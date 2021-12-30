import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchBox = styled.div``;

const SearchBox = ({ children, className }) => {
  return <StyledSearchBox className={className}>{children}</StyledSearchBox>;
};

SearchBox.propTypes = {
  className: PropTypes.string,
};

SearchBox.deafultProps = {
  className: PropTypes.string,
};

export default SearchBox;