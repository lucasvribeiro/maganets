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
    font-style: italic;
    letter-spacing: 1px;
    font-family: "Secular One", sans-serif;
    font-size: 2.5rem;
    line-height: 2.5rem;
    text-align: left;
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
    margin-right: 6px;
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 20px;

    .left-container {
      width: 25%;
    }

    .right-container {
      width: 75%;
    }

    .logo {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
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

    .logo {
      text-align: center;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 20px 10px;

    .link-prefix {
      display: none;
    }
  }
`;

const Header = ({ wishList }) => {
  return (
    <StyledHeader>
      <div className="left-container">
        <Link to="/">
          <h1 className="logo">maganets</h1>
        </Link>
      </div>
      <div className="right-container">
        <div className="links-container">
          <Link to="/location">
            <span className="link">
              <i className="fas fa-map-marker-alt" />
              <span className="link-prefix">Cidade:</span> São Paulo
            </span>
          </Link>

          <Link to="/support">
            <span className="link">
              <i className="fas fa-phone" />
              <span className="link-prefix">Central de </span>Atendimento
            </span>
          </Link>

          <Link to="/wish-list">
            <span className="link">
              <i className="fas fa-heart" />
              <span className="link-prefix">Lista de </span>Desejos
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
