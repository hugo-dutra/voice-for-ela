// Wrapper para os dois componentes SiderWrapper
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;
