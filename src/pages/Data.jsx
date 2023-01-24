import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { getHouses } from '../store/houses.slice'

function Data() {
  const dispatch = useDispatch()
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { byId, allIds, byCity, byType } = houses

  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  return (
    <Body>
      {allIds.map((id) => (
        <p>
          {byId[id].title}*{byId[id].city}
        </p>
      ))}
    </Body>
  )
}

export default Data

// console.log('houses::', houses)
// console.log('byId::', byId)
// console.log('allIds::', allIds)
// console.log('byCity::', byCity)
// console.log('byType::', byType)
// console.log('hola', Object.keys(byType))
