import styled from 'styled-components';


export const StyledResultsBox = styled.div`
  padding-top: 30px;
  position: absolute;
  right: 0;
  left: 0;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const StyledResultsClearHistory = styled.div`
  cursor: pointer;
  color: grey;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
`;

export const StyledResultNode = styled.a`
  display: block;
  width: 100%;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  padding: 5px 10px;
  position: relative;
  &:hover {
    background: #F0F8FF;
  }
`;