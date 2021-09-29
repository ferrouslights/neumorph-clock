import React from 'react';
import Clock from './components/Clock';
import {AppContainer} from './Container.styles'
import GlobalStyle from './global.styles'

const App: React.FC = () => {

  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <Clock/>
    </AppContainer>
    </>
  );
}

export default App;
