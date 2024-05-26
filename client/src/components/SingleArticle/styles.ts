import { Link as RRDLink } from "react-router-dom"
import styled, { css } from "styled-components"

export const Link = styled(RRDLink)`
  text-decoration: none;
`

export const Article  = styled.div<{ $size?: 'large' | 'small' }>`
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.paynesGray};
  border-left: 1px solid ${({ theme }) => theme.colors.paynesGray};
  background-color: ${({ theme }) => theme.colors.vanilla};
  border-radius: 12px;
  cursor: pointer;
  ${({ $size }) => $size === 'large' && css`
    flex: 1 3 auto;
  `};

  ${({ $size }) => $size === 'small' && css`
    flex: 1 2 auto;
    width: 30%;
  `};
`

export const ArticleImage = styled.img`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 50%);
  -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 50%);
`

export const ArticleBody = styled.p`
  color: ${({ theme }) => theme.colors.black};
`

export const ArticleAuthorAndDate = styled.span`
  color: ${({ theme }) => theme.colors.paynesGray};
  font-size: 12px;
  flex-wrap: wrap;
`

export const ArticleAuthorAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`