import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        
        console.log(json);

        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie(); 
    }, []);
    return (
        <div>
            <h1>{loading ? "Loading..." : movie.title}</h1>
            {loading ? null : (<div>
                <img src={movie.medium_cover_image} alt={movie.title} />
                <p>{movie.description_full}</p>
                <ul>
                    {movie.genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <p>Rating: {movie.rating}</p>
                <p>Year: {movie.year}</p>
                <p>Runtime: {movie.runtime} minutes</p>
            </div>)}
        </div>
    );
}

export default Detail;