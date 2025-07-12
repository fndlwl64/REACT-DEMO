import { useState } from 'react';
import { useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  // loading setState
  const [loading, setLoading] = useState(true);
  // movies setState
  const [movies, setMovies] = useState([]);

  // call API to get movies
  // useEffect to call API
  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8');
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // setting up the component to render
  // if loading is true, show loading message
  // if loading is false, show the list of movies
  // use the Movie component to render each movie
  return (  
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              genres={movie.genres}
              coverImage={movie.medium_cover_image} 
            />
          ))}
        </div>
      )}
      <footer>
        <p>Powered by YTS API</p>
      </footer> 
    </div>
  );
}

export default Home;
