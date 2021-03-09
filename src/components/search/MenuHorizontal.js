import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Select, Button } from 'antd'
const { Option } = Select

const MenuHorizontal = ({ handleBreedSelection }) => {
  const MAX_SELECTED_BREEDS = 5
  const [breedSelection, setBreedSelection] = useState([])
  const [avalibleBreeds, setBreeds] = useState([])
  const isBreedsLimitReached = breedSelection.length >= MAX_SELECTED_BREEDS

  useEffect(() => {
    const getAllBreeds = async () => {
      const res = await axios.get(`https://dog.ceo/api/breeds/list/all`)
      const data = res.data.message
      setBreeds(Object.keys(data))
    }

    getAllBreeds()
  }, [])

  const onChange = value => {
    setBreedSelection(value)
  }

  return (
    <div className="menu_horizontal">
      <div className="form">
        <Select
          mode="multiple"
          allowClear
          placeholder="Find Your Doggo"
          style={{ width: '100%' }}
          onChange={onChange}
        >
          {
            avalibleBreeds.map(breed => {
              return <Option key={breed} disabled={isBreedsLimitReached} value={breed}>{breed}</Option>
            })
          }
        </Select>
        <Button onClick={() => handleBreedSelection(breedSelection)}>Search</Button>
      </div>
    </div >
  )
}

export default MenuHorizontal
