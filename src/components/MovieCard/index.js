import {Link} from 'react-router-dom'

import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {id, posterPath, title} = movieData
  const movieImageUrl = `https://image.tmdb.org/t/p/original/${posterPath}`

  return (
    <Link to={`/movies/${id}`} className="link-item">
      <li className="movie-card">
        <img src={movieImageUrl} alt={title} className="movie-logo" />
      </li>
    </Link>
  )
}

export default MovieCard
