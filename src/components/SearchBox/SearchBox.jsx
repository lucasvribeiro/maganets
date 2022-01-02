import { useEffect } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeSearchValue, filterProducts } from "../../actions/index";

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

const SearchBox = ({
  placeholder,
  disabled,
  searchValue,
  changeSearchValue,
  filterProducts,
}) => {
  const handleSearchValueChanged = (e) => {
    changeSearchValue(e.target.value);
    filterProducts(e.target.value);
  };

  useEffect(() => {
    changeSearchValue("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSearchBox>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchValueChanged}
        disabled={disabled}
        placeholder={placeholder}
      />

      <i className="fas fa-search" />
    </StyledSearchBox>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SearchBox.defaultProps = {
  placeholder: "Buscar produto...",
  disabled: false,
};

const mapStateToProps = (store) => ({
  searchValue: store.searchValueState.searchValue,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeSearchValue, filterProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
