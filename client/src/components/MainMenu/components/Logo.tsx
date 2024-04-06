import logo from 'src/assets/logo.png'
import styled from 'styled-components'

export const Logo = () => (
    <LogoStyled src={logo}/>
)

const LogoStyled = styled.img`
    width: 36px;
    height: 36px;
`