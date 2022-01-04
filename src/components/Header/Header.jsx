import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Badge from "../Badge/Badge";
import SearchBox from "../SearchBox/SearchBox";

const StyledHeader = styled.div`
  height: fit-content;
  width: 100vw;
  background: #5a2d82;
  border-top: 10px solid #370f53;
  color: #ffffff;
  padding: 30px 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  .left-container {
    width: 30%;
  }

  .right-container {
    width: 70%;
  }

  .logo {
    margin: 0;
  }

  .links-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    height: fit-content;
  }

  .link {
    padding: 8px 16px;
    border-radius: 16px;

    transition: all 0.3s ease;
  }

  .link:hover {
    background-color: #370f53;
  }

  .link i {
    margin-right: 4px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 30px;

    .left-container {
      width: 20%;
    }

    .right-container {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .left-container {
      width: 100%;
      text-align: center;
      margin-bottom: 24px;
    }

    .right-container {
      width: 100%;
    }

    .link {
      padding: 0;
    }
  }
`;

const Header = ({ wishList }) => {
  return (
    <StyledHeader>
      <div className="left-container">
        <h1 className="logo">MagaNets</h1>
      </div>
      <div className="right-container">
        <div className="links-container">
          <Link to="/">
            <span className="link">
              <i className="fas fa-map-marker-alt" /> Cidade: São Paulo
            </span>
          </Link>

          <Link to="/support">
            <span className="link">
              <i className="fas fa-phone" /> Central de Atendimento
            </span>
          </Link>

          <Link to="/wish-list">
            <span className="link">
              <i className="fas fa-heart" /> Lista de Desejos
              <Badge>{wishList.length}</Badge>
            </span>
          </Link>
        </div>
        <div className="search-container">
          <SearchBox />
        </div>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  wishList: PropTypes.array.isRequired,
};

Header.defaultProps = {};

const mapStateToProps = (store) => ({
  wishList: store.wishListState.wishList,
});

export default connect(mapStateToProps)(Header);
