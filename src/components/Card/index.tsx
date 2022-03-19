import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  CardWrap,
  CardImg,
  TitleCard,
  WrapTitle,
  CardBody,
  Date1,
} from './style';

interface Props {
  onClick: () => void;
  value: {
    image: string;
    title: string;
  };
}

const Card = ({ onClick, value }: Props) => {
  const { image, title } = value;
  return (
    <>
      <CardWrap onClick={onClick}>
        <CardImg>
          <LazyLoadImage
            alt="image"
            src={image ? image : ''}
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
            <TitleCard> {title}</TitleCard>
            <Date1>date</Date1>
          </WrapTitle>
        </CardBody>
      </CardWrap>
    </>
  );
};

export default Card;
