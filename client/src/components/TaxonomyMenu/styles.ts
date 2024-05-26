import styled from 'styled-components'

export const Menu  = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 0 0 12px;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.paynesGray};
  border-left: 1px solid ${({ theme }) => theme.colors.paynesGray};
  background-color: ${({ theme }) => theme.colors.vanilla};
  border-radius: 12px;
`