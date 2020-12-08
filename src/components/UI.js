import React from 'react'

import { getMovie } from '../lib/api'
import { logState } from '../lib/logger'
import { Link } from 'react-router-dom'


class UI extends React.Component {

  state = {
    movie: null,
    moviesLeft: 5
  }
  
  getRandomMovie = async () => {
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage')
      return 
    }
    const randomIndex = Math.floor(Math.random() * 9000000)
    this.setState( { movie: null } )
    try {
      // console.log('tt' + randomIndex)
      const res = await getMovie('tt' + randomIndex)

      if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        // console.log('Its a movie', res.data.Title)
        const moviesLeft = this.state.moviesLeft - 1
        // console.log('Number of movies left:', moviesLeft)
        return this.setState( { movie: res.data, moviesLeft } )
      } 
      return this.getRandomMovie()
    } catch (error) {
      console.log('The error is', error)
    }
  }

  handleSounds = () => {
    this.setState({ playSound: true })
  }

  componentDidMount() {
    this.getRandomMovie()
  }




  render() {
    // if (!this.state.movie) return null
    // logState()
    return (
      <>
        {this.state.movie ? 
          <section className="hero is-fullheight UI">
            <div className="hero-body">
              <div className="columns">
                <div className="column">
                  <button onClick={this.getRandomMovie} className="next-movie button is-danger">LOOKS CRAP</button>
                </div>      
                <div className="column">
                  <div className="card-container">              
                    <div className="card is-flex">
                      <div className="movie-title heading">
                        <h1>{this.state.movie.Title}</h1>
                      </div>
                      <div className="card-image">
                        <figure className="">
                          <a href={`https://www.imdb.com/title/${this.state.movie.imdbID}`}><img src={this.state.movie.Poster} alt="movie-poster"></img></a>
                        </figure>
                        <div className="card-text heading">
                          <p>Year:{this.state.movie.Year}</p>
                          <p>Genre: {this.state.movie.Genre}</p>
                          <p>IMDB rating: {this.state.movie.imdbRating}</p>
                        </div>
                      </div>
                      <div className="selection-buttons"> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <Link to="/congrats">
                    <button className="picked-movie button is-success">THAT WILL DO </button>
                  </Link>
                </div>
              </div>
              <div className="counter">
                <h1><span>{this.state.moviesLeft}</span> OPTIONS REMAINING</h1>
              </div>
            </div>
          </section>

          :
          <section className="hero is-fullheight UI">
            <div className="hero-body">
              <div className="container">
                <div className="card-container is-flex">
                  <div className="spinnerCard">
                    <div className="spinner-img"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      </>
    )
  }
}

export default UI

