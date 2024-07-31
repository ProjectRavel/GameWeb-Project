import React from 'react'
import './home.css'
import GameSwiper from '../components/GameSwiper'
import GameCard from '../components/GameCard'

export default function Home({ games, reference }) {
  return (
    <section id='home' className='home' ref={reference}>
      <div className='container-fluid'>
          <div className='row'>
            <GameSwiper games={games}></GameSwiper>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <h2 className='sectionTitle'>Games on promotion</h2>
            </div>
            <div className='col-lg-6 d-flex justify-content-end'>
              <a href="" className='viewMore'>View More Games<i className='bi bi-arrow-right'></i></a>
              </div>
          </div>
          <div className='row'>
            {
              games.slice(0, 4).map(game=>{
                return <GameCard key={game._id} game={game}></GameCard>
              })
            }
          </div>
      </div>
    </section>
  )
}

