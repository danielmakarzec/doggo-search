import React, { useEffect, useState } from 'react'
import Dogs from './Dogs'
import axios from 'axios'
// import DogCard from './DogCard'
import Filter from './Filter'

const Content = ({ selectedBreeds }) => {
  const [dogs, setDogs] = useState([])
  const [filteredBreeds, setFilteredBreeds] = useState([...dogs])

  const buildDogObjects = data => {
    return data.reduce((array, imgUrl) => {
      const [url, breed, subbreed] = imgUrl.match(/.*\/(\w+)-?(\w*)\/.*$/)
      const obj = {}
      // obj['name'] = !!subbreed ? subbreed : breed
      obj['breed'] = breed
      obj['subbreed'] = subbreed
      obj['img'] = url
      array.push(obj)
      return array
    }, [])
  }

  const getDogs = breeds => {
    const requests = !!breeds.length
      ? breeds.map(breed => axios.get(`https://dog.ceo/api/breed/${breed}/images`))
      : [axios.get(`https://dog.ceo/api/breeds/image/random/12`)]

    return axios.all([...requests])
      .then(res => {
        const dogs = res.map(r => r.data.message)
        return dogs.flat()
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getDogs(selectedBreeds)
      .then(res => {
        const dogObjects = buildDogObjects(res)
        setDogs(dogObjects)
        setFilteredBreeds(dogObjects)
      })
  }, [selectedBreeds])

  const filterChange = list => {
    let newList = list.map(breed => dogs.filter(dog => dog.breed === breed))
    setFilteredBreeds(newList.flat())
  }

  // console.log(dogs.filter(dog => !!dog.liked))

  return (
    <div className="content" >
      <div className="filter">
        <Filter selectedBreeds={selectedBreeds} dogs={dogs} filterChange={filterChange} />
      </div>
      <Dogs dogs={filteredBreeds} />
      {/* <div className="dog_cards" >
        {
          filteredBreeds.map(dog => {
            return <DogCard key={dog.img} dog={dog} />
          })
        }
      </div > */}
    </div >
  )
}

export default Content
