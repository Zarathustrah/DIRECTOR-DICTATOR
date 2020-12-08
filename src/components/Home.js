import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'
import Sound from 'react-sound'
import soundfile from './sounds/netflix.mp3'


const Home = () => (
  <>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered homepagecontainer">
          <Animated animationIn="zoomInDown" isVisible={true}>
            <h1 className="homepagetitle">THE DIRECTOR DICTATOR</h1>   
          </Animated>
          <Animated animationIn="fadeInUp" animationInDelay="1000"isVisible={true}>
            <Link to="/UI" className="button main-button is-large">YOU WILL WATCH ...</Link>   
          </Animated>
          <Sound 
            url={soundfile}
            playStatus={Sound.status.PLAYING}
          />
          
        </div>
      </div>
    </section>
  </> 
)

export default Home



