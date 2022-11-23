import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Movie } from './Types';

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await axios.get('https://api.b7web.com.br/cinema/');
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
              <div key={index} className='grid-movies'>
                <img src={item.avatar} alt="" width={170} />
                {/* {item.titulo} */}
              </div>
            )
          })}
        </div>

      </section>
    </div>
  )
};

export default App;