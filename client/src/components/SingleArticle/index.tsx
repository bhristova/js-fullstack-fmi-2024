import React from 'react'
import { Article } from 'src/data'
import { Container } from 'src/visual'
import * as Styled from './styles'
import { formatDate } from 'src/utils'

type Props = {
  article: Article
  $size?: 'large' | 'small'
}

export const SingleArticle: React.FC<Props> = ({ article, $size }) => {
  return (
    <Styled.Article $size={$size}>
      <Styled.Link to={article.url}>
        <Styled.ArticleImage src={article.image} />
        <Container $ml="16" $mr="16">
          <Styled.ArticleAuthorAndDateContainer>
            <Styled.ArticleAuthorAndDate>{article.author}</Styled.ArticleAuthorAndDate>
            <Styled.ArticleAuthorAndDate>{formatDate(article.dateCreated)}</Styled.ArticleAuthorAndDate>
          </Styled.ArticleAuthorAndDateContainer>
          <Styled.ArticleBody>
            {article.bodyPreview}
          </Styled.ArticleBody>
        </Container>
      </Styled.Link>
    </Styled.Article>
  )
}
