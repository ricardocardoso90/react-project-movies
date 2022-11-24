import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Movie } from './Types';
import { GridMovies } from './components/GridMovies';

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  const url = 'https://api.b7web.com.br/cinema/';
  const getMovies = async () => {
    const response = await axios.get(url);
    const json = response.data;
    setMovies(json);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='box'>
      <header className='header'>
        <h3>Total de Filmes em Cartaz: {movies.length}</h3>
      </header>
      <section className='container'>

        <div className='grid'>
          {movies.map((item, index) => {
            return (
              <GridMovies itemProp={item} key={index} />
            )
          })}
        </div>

      </section>
    </div>
  )
};

export default App;