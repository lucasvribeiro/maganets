import styled from "styled-components";
import PropTypes from "prop-types";

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

const Header = ({ logo, links, searchBox }) => {
  return (
    <StyledHeader data-testid="header">
      <div className="left-container">{logo}</div>
      <div className="right-container">
        <div className="links-container">
          {links && links.map((link, index) => <span key={index}>{link}</span>)}
        </div>
        <div className="search-container">{searchBox}</div>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  wishList: PropTypes.array.isRequired,
  logo: PropTypes.any,
  links: PropTypes.any,
  searchBox: PropTypes.any,
};

Header.defaultProps = {};

export default Header;
