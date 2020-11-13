import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <section>
        <h2 className='title'>Available Tours</h2>
        <div className='underline'></div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </section>
    </>
  )
}

export default Tours
