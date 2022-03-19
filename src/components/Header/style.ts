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
`;

export const Title = styled.div``;

export const WrapFilter = styled.div`
  display: flex;
  gap: 24px;
  [class$='-control'] {
    height: 100% !important;
  }
  color: black !important;
`;
