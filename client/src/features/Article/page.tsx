import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from 'src/resources/loader';
import { articlePageLoader } from '.';
import { TaxonomyMenu } from 'src/components/TaxonomyMenu';
import { Comments } from './components/Comments';

const Page: React.FC = () => {
  const loaderData  = useLoaderData() as LoaderData<typeof articlePageLoader>;

  if (!loaderData?.taxonomy || !loaderData.article) {
    return <div>loading</div>
  }

  return (
    <div>
      <TaxonomyMenu taxonomyUrl={loaderData.taxonomy.url} />
      <img src={loaderData.article.image} />
      {loaderData.article.body}
      <Comments comments={loaderData.comments}/>
    </div>
  )
}

export default Page

/* TODO
1. Add rating of article
2. Reply to comments
3. Display main image and any images in text
4. Actual BE calls 
- rate
- add comment
- reply to comment
- like comment (positive outcome - add the like before knowing if the request went through)
- delete my comment  
*/