// Wrapper para os dois componentes SiderWrapper
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
`;

type SiderWrapperProps = {
  last?: boolean;
};

export const SiderWrapper = styled.div<SiderWrapperProps>`
  width: 50%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  flex-grow: 1;
  border-right: ${(props) => (props.last ? "none" : "1px solid #ccc")};
`;