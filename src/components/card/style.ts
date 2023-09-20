import styled from "styled-components";

export const CardContainer = styled.div`
  
  max-height: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: calc(50vw - 32px);  // Define a largura máxima como metade da viewport, descontando as margens
`;
