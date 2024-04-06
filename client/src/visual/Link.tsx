import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.paynesGray};
    margin: 0.5rem;
    text-decoration: none;
`
