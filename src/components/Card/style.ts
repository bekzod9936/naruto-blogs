import styled from 'styled-components';

export const CardWrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 14px;
  height: 400px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  &:hover {
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;
  background-color: white;
  border-radius: 0 0 14px 14px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TitleCard = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #223367;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (min-width: 1400px) {
    font-size: 16px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  grid-column-gap: 10px;
  word-break: break-word;
`;

export const Date1 = styled.div`
  font-weight: normal;
  font-size: 11px;
  color: #8f8f8f;
  white-space: nowrap;
  margin-left: 10px;
  @media (min-width: 1400) {
    font-size: 12px;
  }
`;
