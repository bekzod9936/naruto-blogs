import React from 'react';
import { IData } from 'types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  CardWrap,
  CardImg,
  TitleCard,
  WrapTitle,
  CardBody,
  Title,
} from './style';

interface Props {
  onClick: () => void;
  value: IData;
}

const Card = ({ onClick, value }: Props) => {
  const { image_url, title, type } = value;
  return (
    <>
      <CardWrap onClick={onClick}>
        <CardImg>
          <LazyLoadImage
            alt="image"
            src={image_url ? image_url : ''}
            height="100%"
            width="100%"
            style={{
              objectFit: 'fill',
              borderRadius: '14px 14px 0 0',
              userSelect: 'none',
            }}
            effect="blur"
            onError={(e: any) => {
              e.target.onerror = null;
              e.target.src = '';
            }}
          />
        </CardImg>
        <CardBody>
          <WrapTitle>
            <Title>Name:</Title>
            <TitleCard> {title}</TitleCard>
          </WrapTitle>
          <WrapTitle>
            <Title>Type:</Title>
            <TitleCard> {type}</TitleCard>
          </WrapTitle>
        </CardBody>
      </CardWrap>
    </>
  );
};

export default Card;
