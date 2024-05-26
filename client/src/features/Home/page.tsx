import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { homePageLoader } from '.';
import { LoaderData } from 'src/resources/loader';
import { ArticlesGrid } from 'src/components/ArticlesGrid';
import { SecondaryMenu } from 'src/components/SecondaryMenu';

const Page: React.FC = () => {
  const articles = useLoaderData() as LoaderData<typeof homePageLoader>;

  return (
    <>
      <SecondaryMenu />
      <ArticlesGrid articles={articles} /> 
    </>
  )
}

export default Page

/* TODO:
1. Login
2. Logout
3. Search
*/