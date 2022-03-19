import React from 'react';
import useApp from './useApp';
import Body from 'components/Body';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import { Container, WrapSpinner } from './style';

const App = () => {
  const { isLoading } = useApp();

  return (
    <Container>
      <Header />
      {isLoading ? (
        <WrapSpinner>
          <Spinner />
        </WrapSpinner>
      ) : (
        <Body />
      )}
    </Container>
  );
};

export default App;
