import proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, title, genres, coverImage}) {
    return (
        <div>
            <img src={coverImage} alt={title} />
            <Link to={`/movie/${id}`}>
                <h2>{title}</h2>
            </Link>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );   
}

Movie.propTypes = {
    title: proptypes.string.isRequired,
    genres: proptypes.arrayOf(proptypes.string).isRequired,
    coverImage: proptypes.string.isRequired
};

export default Movie;