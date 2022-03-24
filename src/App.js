import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentX from './components/ComponentX';
import Title1 from './components/Title1';
import Title2 from './components/Title2';
import RefComp from './components/RefComp';

export const TopLevelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <header >
       React Hooks Context
      </header>
      <TopLevelContext.Provider value="Read Context Root Level">
        <ComponentX />
      </TopLevelContext.Provider>

      <br/>
      <br/>
      <Title1 /> <Title2 />
      <br /><br />

      <RefComp />
    </div>
  );
}

export default App;
