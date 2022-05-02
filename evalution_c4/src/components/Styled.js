import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  width: 80%;
  margin: 20px auto;
  gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  
`;

export const Select = styled.select`
  background-color:wheat;
  border: none;
  outline: none;
  padding: 4px 10px;
  font-size: 20px;
`;

export const Flex = styled.div`
  border: 2px solid #111;
  border-radius: 12px;
  background: white;

`;
