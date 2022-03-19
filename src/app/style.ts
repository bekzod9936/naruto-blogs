import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 24px;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  background-color: var(--black);
`;

export const WrapSpinner = styled.div`
  width: 90%;
  flex-grow: 1;
  display: flex;
  padding: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: var(--darkblue);
`;
