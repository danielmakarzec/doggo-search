import React, { useEffect, useState } from 'react'
import DogCard from './DogCard'
import { Pagination } from 'antd'

const Dogs = ({ dogs }) => {
  const DOGS_PER_PAGE = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [currentDogs, setCurrentDogs] = useState([])

  useEffect(() => {
    const maxPageNumber = dogs.length / DOGS_PER_PAGE
    const currentPageNumber = currentPage > maxPageNumber ? maxPageNumber : currentPage
    const lastDogIndex = currentPageNumber * DOGS_PER_PAGE
    const firstDogIndex = lastDogIndex - DOGS_PER_PAGE
    setCurrentDogs(
      dogs.slice(firstDogIndex, lastDogIndex)
    )
  }, [dogs, currentPage])


  return (
    <div className='dog_cards__wrapper'>
      <div className="dog_cards">
        {
          currentDogs.map(dog => <DogCard key={dog.img} dog={dog} />)
        }
      </div>
      < Pagination
        hideOnSinglePage
        defaultPageSize={DOGS_PER_PAGE}
        total={dogs.length}
        onChange={pageNumber => setCurrentPage(pageNumber)}
      />
    </div>
  )
}

export default Dogs
