import React from 'react';
import { Container } from './style';
import TablePagination from '@mui/material/TablePagination';
import { setRowsPerPage, setPage } from 'reduxtoolkit/blogs';
import { useAppSelector, useAppDispatch } from 'reduxtoolkit/hooks';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, length, rowsPerPage } = useAppSelector((state) => state.blogs);

  return (
    <Container>
      <TablePagination
        page={page}
        component={'div'}
        count={length}
        rowsPerPage={rowsPerPage}
        onPageChange={(
          event: React.MouseEvent<HTMLButtonElement> | null,
          newPage: number
        ) => {
          dispatch(setPage(newPage));
        }}
        onRowsPerPageChange={(
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
          dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
        }}
      />
    </Container>
  );
};

export default Pagination;
