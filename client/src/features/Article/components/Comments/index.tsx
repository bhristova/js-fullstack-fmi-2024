import React from 'react'
import { Comment } from 'src/data'
import { SingleComment } from './SingleComment'
import * as Styled from './styles'
import { Container } from 'src/visual'

type Props = {
  comments: Comment[]
}

export const Comments: React.FC<Props> = ({ comments }) => {
  return (
    <Container>
      <Styled.Label>All comments:</Styled.Label>
      <Styled.Comments>
        {comments.map((comment) => <SingleComment comment={comment} key={comment.id} />)}
      </Styled.Comments>
      <Styled.Label>Add a comment:</Styled.Label>
      <Styled.TextArea/>
    </Container>
  )
}
