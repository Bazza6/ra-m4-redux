import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setUserFilterCity, setUserFilterTitle } from '../../store/houses.slice'
import { colors, Container, dimensions, FlexBox } from '../../styles'
import { Button, Icon } from '../atoms'
import { SelectGroup } from '../molecules'

const SubHeaderStyled = styled(FlexBox)`
  padding-top: ${dimensions.spacing.xl};
  padding-bottom: ${dimensions.spacing.xl};
  background-color: ${colors.clearBlueBg};
  border-top: 1px solid ${colors.border.clearBlueBg};
  border-bottom: 1px solid ${colors.border.clearBlueBg};
`

const FormStyled = styled(FlexBox).attrs({ as: 'form' })`
  ${SelectGroup} {
    &:first-of-type {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      margin-right: 1rem;
    }
  }

  ${Button} {
    background-color: ${colors.blue};
  }
`

function SubHeader({ ...props }) {
  const { houses } = useSelector((state) => state.houses)
  const { byCity, byType } = houses
  const [typeList, setTypeList] = useState([])
  const [cityList, setCityList] = useState([])
  const dispatch = useDispatch()
  const [selectedType, setSelectedType] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  useEffect(() => {
    if (byType) {
      setTypeList(
        Object.keys(byType).map((type) => ({
          value: type,
          text: type, // falta mayuscula
        })),
      )
    }
  }, [byType])

  useEffect(() => {
    if (byCity) {
      setCityList(
        Object.keys(byCity).map((city) => ({
          value: city,
          text: city, // falta mayuscula
        })),
      )
    }
  }, [byCity])

  console.log('houses:::', houses)
  // console.log('setUserFilterTitle:::', setUserFilterTitle)

  const handleClick = () => {
    dispatch(setUserFilterTitle(selectedType))
    dispatch(setUserFilterCity(selectedCity))
  }
  return (
    <SubHeaderStyled {...props}>
      <Container>
        <FormStyled direction="row" align="center">
          <SelectGroup
            id="type"
            label="Tipo"
            defaultText="Piso, chalet o garaje..."
            hideLabel
            options={typeList}
            onChange={(e) => setSelectedType(e.target.value)}
          />

          <SelectGroup
            id="ciudad"
            label="Ciudad"
            defaultText="Madrid, Barcelona o Zaragoza..."
            hideLabel
            options={cityList}
            onChange={(e) => setSelectedCity(e.target.value)}
          />

          <Button onClick={handleClick}>
            <Icon icon="search" />
          </Button>
        </FormStyled>
      </Container>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
