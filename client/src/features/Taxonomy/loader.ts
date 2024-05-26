import { LoaderFunction } from 'react-router-dom';
import { fetchTaxonomyByUrl, fetchArticlesByTaxonomyId } from 'src/data';

export const loader = (async ({ params }) => {
  if (!('*' in params) || !params['*']) {
    throw Error('Invalid taxonomy')
  }

  const taxonomy = await fetchTaxonomyByUrl(params['*'])
  
  if (taxonomy) {
    const articles = await fetchArticlesByTaxonomyId(taxonomy?.id)
    console.log('@@@ aricles', articles)
    return { articles, taxonomy }
  }

}) satisfies LoaderFunction

