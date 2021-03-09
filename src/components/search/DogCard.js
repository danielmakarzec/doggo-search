import React, { useEffect, useState } from 'react'
import { HeartOutlined } from '@ant-design/icons'

const DogCard = ({ dog }) => {
  const { img, breed, subbreed } = dog
  const [liked, setLiked] = useState(false)

  const handleLike = e => {
    e.preventDefault()
    const myDogs = JSON.parse(localStorage.getItem('dogs')) || []
    const index = myDogs.findIndex(dog => dog.img === img)
    if (index === -1) localStorage.setItem('dogs', JSON.stringify([...myDogs, dog]))
    if (index >= 0) localStorage.dogs = JSON.stringify(myDogs.filter(dog => dog.img !== img))
    setLiked(!liked)
    // keepTheDog(img)
  }


  useEffect(() => {
    const isDogLiked = () => {
      const myDogs = JSON.parse(localStorage.getItem('dogs')) || []
      return !!myDogs.find(dog => dog.img === img)
    }

    setLiked(isDogLiked())
  }, [img])

  const likedOrNot = !!liked ? { background: 'hotpink', color: '#FFF', borderColor: '#000' } : {}

  return (
    <div className="dog_card_wrapper">
      <div className="dog_card">
        <div className="dog_card__left btn" onClick={handleLike} style={likedOrNot}>
          <HeartOutlined /><div className='btn--add'>keep</div>
        </div>
        <div className="dog_card__right">
          <img src={img} alt={img} />
          <div className="dog_card__right__body">
            <div className="dog_card__right__body__text">{breed}</div>
            <div className="dog_card__right__body__text">{subbreed}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogCard
