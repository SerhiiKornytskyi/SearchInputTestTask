import styled from 'styled-components';

export const StyledInputWrap = styled.div`
  position: relative;
  width: 400px;
`;

export const StyledInputClear = styled.a`
  width: 20px;
  height: 50px;
  bacground: red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
`;


export const StyledInputSearch = styled.a`
  width: 20px;
  height: 50px;
  bacground: red;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 35px;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  outline: none;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  font-size: 22px;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const StyledInputPredicted = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;