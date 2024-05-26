import { Container } from "src/visual";
import styled from "styled-components";

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.paynesGray};
  border-left: 1px solid ${({ theme }) => theme.colors.paynesGray};
  background-color: ${({ theme }) => theme.colors.vanilla};
  border-radius: 12px;
  padding: 8px;
  gap: 8px;
  overflow-y: scroll;
  max-height: 440px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.vanilla};
`

export const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.paynesGray};
`

export const Comment = styled(Container)`
`

export const AuthorName = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`

export const DateCreated = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.paynesGray};
  align-self: center;
`

export const LikesIcon = styled.img`
  width: 14px;
  margin-right: 4px;
`

export const LikeReplyButton = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.paynesGray};
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
  align-self: center;
  padding: 0;
`