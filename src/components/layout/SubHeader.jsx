import React from 'react'
import styled from 'styled-components'
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
  const handleClick = () => console.log('hola')
  return (
    <SubHeaderStyled {...props}>
      <Container>
        <FormStyled direction="row" align="center">
          <SelectGroup
            id="type"
            label="Tipo"
            defaultText="Piso, chalet o garaje..."
            hideLabel
            options={[
              { value: 'piso', text: 'Piso' },
              { value: 'garaje', text: 'Garaje' },
              { value: 'chalets', text: 'Chalets' },
            ]}
            onChange={(event) => console.log(event.target.value)}
          />

          <SelectGroup
            id="ciudad"
            label="Ciudad"
            defaultText="Madrid, Barcelona o Zaragoza..."
            hideLabel
            options={[
              { value: 'barcelona', text: 'Barcelona' },
              { value: 'madrid', text: 'Madrid' },
              { value: 'zaragoza', text: 'Zaragoza' },
            ]}
            onChange={(event) => console.log(event.target.value)}
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
