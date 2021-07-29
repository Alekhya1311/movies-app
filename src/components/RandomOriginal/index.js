import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import Header from '../Header'

const OriginalApiUrl =
  'https://api.themoviedb.org/3/discover/tv?api_key=842d15262c83a9d9a8bc88343317cc36'

class RandomOriginal extends Component {
  state = {
    isLoading: true,
    original: [],
  }

  componentDidMount() {
    this.getOriginal()
  }

  setOriginal = (formattedData, isLoading) => {
    this.setState({
      original: formattedData,
      isLoading,
    })
  }

  getOriginal = async () => {
    const response = await fetch(OriginalApiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.results.map(movie => ({
      name: movie.name,
      posterPath: movie.poster_path,
      voteAverage: movie.vote_average,
      overview: movie.overview,
      releaseDate: movie.release_date,
      voteCount: movie.vote_count,
      adult: movie.adult,
      backdropPath: movie.backdrop_path,
      title: movie.title,
      originalLanguage: movie.original_language,
      mediaType: movie.media_type,
      id: movie.id,
    }))
    this.setOriginal(formattedData, false)
  }

  renderOriginalList = () => {
    const {original} = this.state
    const movieImageUrl = `https://image.tmdb.org/t/p/original/${original[0].posterPath}`

    return (
      <div
        className="background-image"
        style={{backgroundImage: `url(${movieImageUrl})`}}
      >
        <Header />
        <div className="random-original">
          <h1 className="title-movie">{original[0].name}</h1>

          <p className="overview">{original[0].overview}</p>
          <div className="button">
            <button type="button" className="button-type">
              Play
            </button>
          </div>
        </div>
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

    return (
      <div className="home-route-container">
        <div className="Original-list-container">
          {isLoading ? this.renderLoader() : this.renderOriginalList()}
        </div>
      </div>
    )
  }
}

export default RandomOriginal
