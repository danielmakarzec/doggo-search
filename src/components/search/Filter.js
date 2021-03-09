import React, { useEffect, useState } from 'react'
import { Tree } from 'antd'

const Filter = ({ selectedBreeds, dogs, filterChange }) => {
  const [treeData, setTreeData] = useState([])

  const isTreeReady = tree => {
    return !!tree[0]
      ? !!tree[0].children.length
      : false
  }

  const buildTreeBranch = list => {
    return list.reduce((container, breed) => {
      container.push({ title: breed, key: breed, children: [] })
      return container
    }, [])
  }

  useEffect(() => {
    const buildTreeData = async () => {
      const parents = await buildTreeBranch(selectedBreeds.sort())

      const parentsAndChildren = await parents.map(parent => {
        const children = dogs.filter(breed => !!breed.subbreed & breed.breed === parent.title)
        const childrenList = children.map(child => child.subbreed)
        return { ...parent, children: buildTreeBranch([...new Set(childrenList)]) }
      })

      const treeData = await [{ title: 'All', key: 'all', children: parentsAndChildren }]
      setTreeData([...treeData])
    }

    buildTreeData()
  }, [selectedBreeds, dogs])

  return (
    <>
      {
        !!isTreeReady(treeData) && <>
          <Tree
            checkable
            selectable
            expandedKeys={['all', ...selectedBreeds]}
            defaultCheckedKeys={['all']}
            // onSelect={onSelect}
            onCheck={filterChange}
            treeData={treeData}
          />
        </>
      }
    </>
  )
}

export default Filter
