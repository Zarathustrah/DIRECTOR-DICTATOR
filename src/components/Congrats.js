import React from 'react'

import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'
import Sound from 'react-sound'
import soundfile from './sounds/kc78v26_1.mp3'

const Congrats = () => (
  <section className="hero is-fullheight problem-page congrats">
    <div className="hero-body">
      <div className="container has-text-centered problempagecontainer">
        <Animated animationIn="fadeInUp" animationInDelay="1000" isVisible={true}>
          <Link to="/problempage" className="button main-button is-large">Pick Again...</Link>   
        </Animated>
        <Sound 
          url={soundfile}
          playStatus={Sound.status.PLAYING}
        />
      </div>
    </div>
  </section>
)

export default Congrats