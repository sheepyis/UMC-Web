import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { movies } from './movieDummy';
import Movie from './Components/Movie';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: indigo;
  }
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8%;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MoviesContainer className="app-container">
        {movies.results.map((item) => {
          return <Movie movieData={item} />;
        })}
      </MoviesContainer>
    </div>
  );
};

export default App;
