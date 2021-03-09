import React, { useEffect, useState } from 'react'
import MenuHorizontal from './MenuHorizontal'
import '../../stylesheets/search.scss'
import Content from './Content'

const Search = () => {
  const [selectedBreeds, setBreeds] = useState([])

  useEffect(() => {
    // console.log(selectedBreeds)
  }, [selectedBreeds])

  const handleBreedSelection = value => {
    setBreeds(value)
  }

  return (
    <div className='content_wrapper'>
      <MenuHorizontal handleBreedSelection={handleBreedSelection} />
      <Content selectedBreeds={selectedBreeds} />
      {/* <MenuHorizontal /> */}
      {/* <Content /> */}
    </div>
  )
}

export default Search