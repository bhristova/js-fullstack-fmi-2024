import { useCallback, useState } from "react"
import { Article } from ".."
import { articles as testArticles } from "../testData"

export const useFetchArticlesByTaxonomyId = (taxonomyId: string): [Article[], () => void] => {
  const [articles, setArticles] = useState<Article[]>([])
  const fetchArticles = useCallback(() => {
    // fetch('/').then(async (resp) => setArticles(await resp.json()))
    const articles = _findArticlesByTaxonomyId(taxonomyId)
    setArticles(articles)
  }, [])

  return [articles, fetchArticles]
}

const _findArticlesByTaxonomyId = (taxonomyId: string) =>
  testArticles.filter((article) => article.taxonomyId === taxonomyId)

export const useFetchArticle = (id: string): [Article | undefined, () => void] => {
  const [article, setArticle] = useState<Article>()
  const fetchArticle = useCallback(() => {
    // fetch('/').then(async (resp) => setArticles(await resp.json()))
    const article = testArticles.find((article) => article.id === id)
    setArticle(article)
  }, [])

  return [article, fetchArticle]
}