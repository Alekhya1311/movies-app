import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class SpecificMovieDetails extends Component {
  state = {
    isLoading: true,
    movieData: {},
  }

  componentDidMount() {
    this.getMovie()
  }

  setMovie = (formattedData, isLoading) => {
    this.setState({movieData: formattedData, isLoading})
  }

  getMovie = async () => {
    const {match} = this.props
    console.log(this.props)
    const {params} = match
    const {id} = params

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=842d15262c83a9d9a8bc88343317cc36&language=en-US`,
    )
    const fetchedData = await response.json()
    const formattedData = {
      genres: fetchedData.genres,
      adult: fetchedData.adult,
      backdropPath: fetchedData.backdrop_path,
      budget: fetchedData.budget,
      homepage: fetchedData.homepage,
      imdbId: fetchedData.imdb_id,
      originalLanguage: fetchedData.original_language,
      originalTitle: fetchedData.original_title,
      overview: fetchedData.overview,
      releaseDate: fetchedData.release_date,
      tagline: fetchedData.tagline,
      title: fetchedData.title,
    }
    this.setMovie(formattedData, false)
  }

  renderMovie = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {movieData} = this.state
    const {
      backdropPath,
      title,
      tagline,
      overview,
      releaseDate,
      adult,
    } = movieData

    return (
      <div className="movie-container">
        <img src={backdropPath} alt={id} className="movie-image" />
        <p>title: {title}</p>
        <p>overview : {overview}</p>
        <p>release date: {releaseDate}</p>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return <div>{isLoading ? this.renderLoader() : this.renderMovie()}</div>
  }
}

export default SpecificMovieDetails
