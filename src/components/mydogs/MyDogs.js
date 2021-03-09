import React, { useEffect, useState } from 'react'
import DogCard from '../search/DogCard'
import { getDataFromLocalStorage } from '../../utilities'
import '../../stylesheets/mydogs.scss'

const MyDogs = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    const myDogs = getDataFromLocalStorage('dogs') || []
    setDogs(myDogs)
  }, [])

  return (
    <div className='mydogs'>
      {
        dogs.map(dog => <DogCard key={dog.img} dog={dog} />)
      }
    </div>
  )
}

export default MyDogs
