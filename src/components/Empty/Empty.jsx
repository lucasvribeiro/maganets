import styled from "styled-components";
import PropTypes from "prop-types";

const StyledEmpty = styled.div`
  height: 180px;
  width: 240px;
  color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20px;

  border: 1px solid #dddddd;
  border-radius: 4px;

  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.08);

  i {
    font-size: 36px;
  }

  p {
    font-weight: 300;
    margin: 8px 0 0 0;
  }
`;

const Empty = ({ message }) => {
  return (
    <StyledEmpty data-testid="empty">
      <i className="far fa-folder-open" />
      <p>{message}</p>
    </StyledEmpty>
  );
};

Empty.propTypes = {
  message: PropTypes.string,
};

Empty.defaultProps = {
  message: "Nenhum item",
};

export default Empty;
