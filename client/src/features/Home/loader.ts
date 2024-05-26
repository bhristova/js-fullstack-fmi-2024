import { articles } from "src/data/testData";
import { LoaderFunction } from 'react-router-dom';

export const loader = (async () => {
  // const [articles] = await useFetchArticlesForHomePage()

  return articles
}) satisfies LoaderFunction

