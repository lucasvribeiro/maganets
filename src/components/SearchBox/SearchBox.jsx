import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSearchBox = styled.div`
  i {
    position: relative;
    left: 16px;
    top: -34px;
    color: #999999;
    transition: all 0.3s ease;
  }

  input {
    width: 100%;
    height: 48px;
    padding: 0 40px;
    border-radius: 4px;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.35);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.7);
      color: #666666;

      + i {
        color: #5a2d82;
      }
    }

    &:hover {
      box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.7);
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
