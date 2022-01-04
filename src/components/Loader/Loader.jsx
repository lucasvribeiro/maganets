import styled from "styled-components";
import PropTypes from "prop-types";
import { Spin } from "antd";

import "antd/lib/spin/style/index.css";

const StyledLoader = styled(Spin)`
  max-height: none !important;
  height: 100vh !important;

  .ant-spin-dot-item {
    background: #5a2d82 !important;
  }
`;

const Loader = ({ children, size, loading }) => {
  return (
    <StyledLoader data-testid="loader" size={size} spinning={loading}>
      {children}
    </StyledLoader>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  size: "middle", // "small", "middle" or "large"
  loading: false,
};

export default Loader;
