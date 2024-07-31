import React from 'react'
import './bag.css'

function Bag({games, reference}) {
  return (
    <section className='bag' id='bag' ref={reference}>
        <h1>My Bag</h1>
    </section>
  )
}

export default Bag
