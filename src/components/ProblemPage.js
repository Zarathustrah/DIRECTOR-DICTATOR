import React from 'react'

import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

const ProblemPage = () => (
  <section className="hero is-fullheight problem-page">
    <div className="hero-body">
      <div className="container has-text-centered problempagecontainer">
        <h1>something went very wrong. either your indecision has killed you or the page stopped working.</h1>
        <Animated animationIn="fadeInUp" animationInDelay="1000"isVisible={true}>
          <Link to="/" className="button main-button is-large">Go Home...</Link>   
        </Animated>
      </div>
    </div>
  </section>
)

export default ProblemPage