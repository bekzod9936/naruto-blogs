import styled from 'styled-components';
import TablePagination from '@mui/material/TablePagination';

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
  @media (max-width: 600px) {
    grid-template-columns: minmax(100%, 1fr);
    padding-right: 15px;
    grid-gap: 25px;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(40%, 1fr));
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, minmax(20%, 1fr));
    padding-right: 25px;
    grid-gap: 35px;
  }
`;

export const Pagination = styled(TablePagination)`
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

export const WrapPag = styled.div``;
