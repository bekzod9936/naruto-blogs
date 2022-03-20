import { device } from 'style';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  width: 100%;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 24px;
  overflow: hidden;
  border-radius: 5px;
  flex-direction: column;
  background-color: var(--darkblue);
`;

export const WrapperCard = styled.div`
  width: 100%;
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(3, minmax(30%, 1fr));
  grid-gap: 30px;
  padding-right: 25px;
  border-radius: 14px;
  @media (max-width: ${device.mobile}) {
    grid-template-columns: minmax(100%, 1fr);
    padding-right: 15px;
    grid-gap: 25px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }
  @media (min-width: ${device.laptop}) {
    grid-template-columns: repeat(4, minmax(20%, 1fr));
    padding-right: 25px;
    grid-gap: 35px;
  }
`;

export const WrapPag = styled.div`
  .MuiTablePagination-displayedRows,
  .MuiTablePagination-selectLabel,
  .MuiTablePagination-select {
    color: white !important;
  }
  .MuiSvgIcon-root {
    path {
      fill: white;
    }
  }
`;
