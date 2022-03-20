import React from 'react';
import { IData } from 'types';
import Card from 'components/Card';
import Modal from 'components/Modal';
import TablePagination from '@mui/material/TablePagination';
import { useAppSelector, useAppDispatch } from 'reduxtoolkit/hooks';
import { Container, Wrapper, WrapperCard, WrapPag } from './style';
import {
  handleClose,
  setModalData,
  setRowsPerPage,
  setPage,
} from 'reduxtoolkit/blogs';

const Body = () => {
  const dispatch = useAppDispatch();

  const { renderdata, open, page, length, rowsPerPage, modaldata } =
    useAppSelector((state) => state.blogs);

  return (
    <Container>
      <Wrapper>
        <WrapperCard>
          {renderdata.map((item: IData) => {
            const { mal_id } = item;
            return (
              <Card
                key={mal_id}
                onClick={() => {
                  dispatch(setModalData(item));
                }}
                value={item}
              />
            );
          })}
          <Modal
            open={open}
            handleClose={() => dispatch(handleClose())}
            value={modaldata}
          />
        </WrapperCard>
        <WrapPag>
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
        </WrapPag>
      </Wrapper>
    </Container>
  );
};

export default Body;
