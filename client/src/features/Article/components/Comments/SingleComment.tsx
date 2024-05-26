import React from 'react'
import { Comment } from 'src/data'
import * as Styled from './styles'
import { formatDate } from 'src/utils'
import { Container } from 'src/visual'

type Props = {
  comment: Comment
  $ml?: string
}

export const SingleComment: React.FC<Props> = ({ comment, $ml }) => {
  return (
    <Styled.Comment $ml={$ml} $mt="8" $mb="8" $display="grid">
      <Container $display="flex" $gap="16px">
        <Styled.DateCreated>{comment.authorName}</Styled.DateCreated>
        <Styled.DateCreated>•</Styled.DateCreated>
        <Styled.DateCreated>{formatDate(comment.dateCreated)}</Styled.DateCreated>
      </Container>
      {comment.content}
      <LikesButton likes={comment.likes} />
      {comment.children?.map((child) => <SingleComment comment={child} key={child.id} $ml="24" />)}
    </Styled.Comment>
  )
}

const LikesButton = ({ likes }: { likes?: number }) => (
  <Container $display="flex" $gap="4px">
    {likes && (
      <>
        <Styled.DateCreated>{`${likes} ${likes > 1 ? 'likes' : 'like'}`}</Styled.DateCreated>
        •
      </>
    )}
    <Styled.LikeReplyButton>Like</Styled.LikeReplyButton>
    •
    <Styled.LikeReplyButton>Reply</Styled.LikeReplyButton>
  </Container>
)
