import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { taxonomyPageLoader } from '.';
import { LoaderData } from 'src/resources/loader';
import { TaxonomyMenu } from 'src/components/TaxonomyMenu';
import { ArticlesGrid } from 'src/components/ArticlesGrid';
import { SecondaryMenu } from 'src/components/SecondaryMenu';

const Page: React.FC = () => {
  const loaderData = useLoaderData() as LoaderData<typeof taxonomyPageLoader>;

  if (!loaderData?.taxonomy || !loaderData.articles || !loaderData.articles.length) {
    return <div>loading</div>
  }

  return (
    <div>
      <TaxonomyMenu taxonomyUrl={loaderData.taxonomy.url ?? ''} />
      <SecondaryMenu parentTaxonomyId={loaderData.taxonomy.id} />
      <ArticlesGrid articles={loaderData.articles} /> 
    </div>
  )
}

export default Page

/* TODO:
1. a menu with all taxonomies
*/