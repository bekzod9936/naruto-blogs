import { device } from 'style';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  width: 100%;
  display: flex;
  margin-bottom: 24px;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  padding: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--darkblue);
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.div`
  @media (max-width: ${device.mobile}) {
    margin-bottom: 24px;
  }
`;

export const WrapFilter = styled.div`
  display: flex;
  gap: 24px;
  [class$='-control'] {
    height: 56px !important;
  }
  color: black !important;
  @media (max-width: ${device.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;
