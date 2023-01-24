import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { getHouses } from '../store/houses.slice'
import { Container, dimensions, FlexBox } from '../styles'

function Data() {
  const dispatch = useDispatch()
  const { houses } = useSelector((state) => state.houses)
  const { byId, allIds, userFilters } = houses

  const HomeStyled = styled(Container)`
    margin-top: ${dimensions.spacing.xxl};
    margin-bottom: 5rem;
  `

  const MapPlaceholder = styled(FlexBox)`
    background-color: #ccc;
    border-radius: ${dimensions.borderRadius.base};
    margin-left: ${dimensions.spacing.xxl};
  `
  useEffect(() => {
    dispatch(getHouses())
  }, [dispatch])

  // const byCity = (house, city) => {
  //   if (!city) return true
  //   return house.userFilters.city === city
  // }
  // const byType = (house, type) => {
  //   if (!type) return true
  //   return house.userFilters.type === type
  // }
  // const filterHouses = (house, city, type) =>
  //   byCity(house, city) && byType(house, type)
  // .filter((id) => filterHouses(byId[id], byCity, byType))

  return (
    <Body>
      <HomeStyled>
        <FlexBox direction="row">
          {allIds
            .filter((id) => byId[id].city.includes(userFilters.city))
            .filter((id) => byId[id].type.includes(userFilters.type))
            .map((id) => (
              <p>
                {byId[id].title} * {byId[id].city}
              </p>
            ))}
          <MapPlaceholder grow="1" shrink="0" justify="center" align="center">
            Mapa
          </MapPlaceholder>
        </FlexBox>
      </HomeStyled>
    </Body>
  )
}

export default Data

// console.log('houses::', houses)
// console.log('byId::', byId)
// console.log('byId[2].city::', byId[2].city)
// console.log('allIds::', allIds)
// console.log('byCity::', byCity)
// console.log('byType::', byType)
// console.log('hola', Object.keys(byType))
