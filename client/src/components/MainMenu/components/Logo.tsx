import { Link } from 'react-router-dom'
import logo from 'src/assets/logo.png'
import styled from 'styled-components'

export const Logo = () => (
  <Link to="/">
    <LogoStyled src={logo} />
  </Link>
)

const LogoStyled = styled.img`
  width: 36px;
  height: 36px;
`