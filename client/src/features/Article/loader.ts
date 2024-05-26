import { LoaderFunction } from 'react-router-dom';
import { fetchArticleById, fetchArticleComments, fetchTaxonomyById } from 'src/data';

export const loader = (async ({ params }) => {
  if (!('articleId' in params) || !params.articleId) {
    throw Error ('Invalid article')
  }

  const id = params.articleId.split('-')[0]

  if (!id) {
    throw Error ('Invalid article')
  }

  const article = await fetchArticleById(id)

  if (article) {
    const taxonomy = await fetchTaxonomyById(article.taxonomyId)
    const comments = await fetchArticleComments(article.id)
    return { article, taxonomy, comments }
  }
}) satisfies LoaderFunction

