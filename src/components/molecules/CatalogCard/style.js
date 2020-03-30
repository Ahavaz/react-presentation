import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  width: 130px;
  justify-content: center;
  align-items: center;
  color: blue;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  min-height: 200px;
  background-color: grey;
  border-radius: 8px;
  display: ${({ catalog }) => (catalog.active ? "block" : "none")};
`;
