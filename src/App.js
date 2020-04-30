import React from 'react';
import styled from 'styled-components';
import './App.css';
import data from './linksData.json';
import { Links } from './components/Links';

function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <Links data={data} />
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  margin: 64px;

  @media only screen and (max-width: 600px) {
    margin: 32px;
  }
`;

export default App;
