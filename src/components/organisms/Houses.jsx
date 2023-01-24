import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../atoms'
import { HouseCard } from '../molecules'
import { FlexBox, Grid } from '../../styles'
import { getHouses } from '../../store/houses.slice'

const HousesStyled = styled(FlexBox)``

function Houses() {
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { byId, allIds, userFilters } = houses
  const itemPage = 9

  useEffect(() => {
    dispatch(getHouses()) // Pasar aquí al thunk los parametros necesarios para la paginación
  }, [dispatch])

  return (
    <HousesStyled>
      {reqStatus === 'loading' && <div>Loading...</div>}
      {reqStatus === 'failed' && <div>Error</div>}
      {reqStatus === 'success' && (
        <Grid gridGap="32px">
          {allIds
            .slice(0, itemPage * currentPage) // La paginación que muestras no es real, deberías de pedir a la API los items que quieres
            .filter((id) => byId[id].city.includes(userFilters.city))
            .filter((id) => byId[id].type.includes(userFilters.type))
            .map((id) => (
              <HouseCard
                key={byId[id].id}
                title={byId[id].title}
                price={`${byId[id].price}€`}
                img={byId[id].image}
                link=""
              />
            ))}
        </Grid>
      )}
      <FlexBox align="center">
        {allIds.length >= itemPage * currentPage && ( // esto no va bien
          <Button
            style={{ marginTop: '2rem' }}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Load more
          </Button>
        )}
      </FlexBox>
    </HousesStyled>
  )
}

export default styled(Houses)``
