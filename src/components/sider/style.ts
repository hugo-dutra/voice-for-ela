import styled from "styled-components";

export const SiderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6px;
  padding: 6px;
  max-width: calc(50vw - 32px); // Metade da largura da viewport, descontando as margens
`;
