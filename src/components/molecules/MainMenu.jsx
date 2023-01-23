import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { main } from '../../constants'
import { colors } from '../../styles'

const MainMenuStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 1rem;

    &:first-child {
      margin-left: 0;
    }
  }
`
const StyledNavLink = styled(NavLink).attrs({
  activeclassname: 'active',
})`
  color: ${colors.font.base};
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`

function MainMenu() {
  return (
    <MainMenuStyled>
      {Object.values(main).map(({ path, label }) => (
        <li key={path}>
          <StyledNavLink to={path}>{label}</StyledNavLink>
        </li>
      ))}
    </MainMenuStyled>
  )
}

export default styled(MainMenu)``
