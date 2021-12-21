import React from 'react';
import Header from '../components/Header';
import Particles from 'react-particles-js';
import './home.css';
import WeatherWidget from '../components/WeatherWidget/WeatherWidget';
import {Container} from 'react-bootstrap/'

function Home() {
    return (
      <Container>
        <div className='home'>
          <Particles 
              className='particles-canvas'
              params={{
                particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  shape: {
                    type: 'polygon',
                    stroke: {
                      width: 6,
                      color: 'rgba(200,65,10,10)'
                    }
                  }
                }
              }}
            />
          <div className='header'>
            
            <Header />
          </div>
              
        </div>
        <article>
        <WeatherWidget />

        </article>
      </Container>
    )
}

export default Home
