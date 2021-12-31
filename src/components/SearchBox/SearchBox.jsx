import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchBox = styled.div`
  i {
    position: relative;
    left: 16px;
    top: -34px;

    color: #999999;
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 4px;

    box-sizing: border-box;

    border: 1px solid #cfcfcf;
    padding: 0 40px;

    &:focus {
      border: 1px solid #370f53;
      outline: none;
    }
  }
`;

const SearchBox = ({ placeholder, value, disabled, onChange }) => {
  return (
    <StyledSearchBox>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />

      <i className="fas fa-search" />
    </StyledSearchBox>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.any,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

SearchBox.deafultProps = {
  placeholder: "Busca...",
  disabled: false,
};

export default SearchBox;
