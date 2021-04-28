import "./Container.scss";
import styled from "styled-components";

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;
