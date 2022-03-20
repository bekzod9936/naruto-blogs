import React from 'react';
import { IData } from 'types';
import Card from 'components/Card';
import Modal from 'components/Modal';
import { Container, Wrapper, WrapperCard } from './style';
import { handleClose, setModalData } from 'reduxtoolkit/blogs';
import { useAppSelector, useAppDispatch } from 'reduxtoolkit/hooks';
import Pagination from 'components/Pagination';

const Body = () => {
  const dispatch = useAppDispatch();

  const { renderdata, open, modaldata } = useAppSelector(
    (state) => state.blogs
  );

  return (
    <Container>
      <Wrapper>
        <WrapperCard>
          {renderdata.length === 0 ? (
            <div>not found</div>
          ) : (
            renderdata.map((item: IData) => {
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
            })
          )}
          <Modal
            open={open}
            handleClose={() => dispatch(handleClose())}
            value={modaldata}
          />
        </WrapperCard>
        <Pagination />
      </Wrapper>
    </Container>
  );
};

export default Body;
