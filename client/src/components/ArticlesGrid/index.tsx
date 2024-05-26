import React from 'react'
import { Article } from 'src/data'
import * as Styled from './styles'
import { SingleArticle } from '../SingleArticle'

type Props = {
  articles: Article[]
}

export const ArticlesGrid: React.FC<Props> = ({ articles }) => {
  return (
    <Styled.Grid>
      <Styled.OneLargeTwoSmallArticles>
        <SingleArticle article={articles[0]} $size='large' />
        {articles.slice(1,3).map((article) => <SingleArticle article={article} key={article.id} $size="small" />)}
      </Styled.OneLargeTwoSmallArticles>
      <Styled.SmallArticles>
        {articles.slice(3).map((article) => <SingleArticle article={article} key={article.id} $size="small" />)}
      </Styled.SmallArticles>
    </Styled.Grid>
  )
}