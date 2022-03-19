import React from 'react';
import Card from 'components/Card';
import Modal from 'components/Modal';
import { useAppSelector, useAppDispatch } from 'reduxtoolkit/hooks';
import { Container, Wrapper, WrapperCard, WrapPag, Pagination } from './style';
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
          {renderdata.map((item: any) => {
            const { image_url, mal_id, title, type } = item;
            return (
              <Card
                key={mal_id}
                onClick={() => {
                  dispatch(setModalData(item));
                }}
                value={{
                  image: image_url,
                  title: title,
                }}
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
          <Pagination
            page={page}
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
