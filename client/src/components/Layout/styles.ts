import styled from 'styled-components'

export const Layout = styled.div`
  margin: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 750px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    max-width: 1000px;
  }
`
