import { useCallback, useState } from "react"
import { Article, FullArticle } from ".."
import { fullArticles, articles as testArticles } from "../testData"

export const useFetchArticlesByTaxonomyId = (taxonomyId: string): [Article[], () => void] => {
  const [articles, setArticles] = useState<Article[]>([])
  const fetchArticles = useCallback(async () => {
    // fetch('/').then(async (resp) => setArticles(await resp.json()))
    const articles = await fetchArticlesByTaxonomyId(taxonomyId)

    if (articles) {
      setArticles(articles)
    }
  }, [taxonomyId])

  return [articles, fetchArticles]
}

export const useFetchArticle = (id: string): [Article | undefined, () => void] => {
  const [article, setArticle] = useState<Article>()
  const fetchArticle = useCallback(() => {
    // fetch('/').then(async (resp) => setArticles(await resp.json()))
    const article = testArticles.find((article) => article.id === id)
    setArticle(article)
  }, [id])

  return [article, fetchArticle]
}

export const fetchArticlesByTaxonomyId = async (taxonomyId: string): Promise<Article[] | undefined> => {
  // fetch('/').then(async (resp) => setArticles(await resp.json()))
  return testArticles.filter((article) => article.taxonomyId === taxonomyId)
}

export const useFetchArticlesForHomePage = (): [Article[], () => void] => {
  const [articles, setArticles] = useState<Article[]>([])
  const fetchArticles = useCallback(() => {
    // fetch('/').then(async (resp) => setArticles(await resp.json()))
    setArticles(testArticles)
  }, [])

  return [articles, fetchArticles]
}

export const fetchArticleById = async (id: string): Promise<FullArticle | undefined> => {
  return fullArticles.find((article) => article.id === id)
}
