import { useCallback, useState } from "react"
import { Comment, Taxonomy } from "src/data"
import { comments, taxonomies as testTaxonomies } from "../testData"
import { matchPath } from "react-router-dom"

export const useFetchTaxonomiesByParentId = (): [Array<Taxonomy>, (parentTaxonomyId?: string) => void] => {
  const [taxonomies, setTaxonomies] = useState<Array<Taxonomy>>([])
  // const fetchTaxonomies = useCallback(() => {
  //   fetch('/').then(async (resp) => setTaxonomies(await resp.json()))
  // }, [])

  const fetchTaxonomies = useCallback((parentTaxonomyId?: string) => {
    if (parentTaxonomyId) {
      for (const taxonomy of testTaxonomies) {
        const maybeTaxonomy = _findOnlyTaxonomyById(taxonomy, parentTaxonomyId)
        if (maybeTaxonomy) {
          setTaxonomies(maybeTaxonomy.children ?? [])
        }
      }
    } else {
      setTaxonomies(testTaxonomies)
    }
  }, [])

  return [taxonomies, fetchTaxonomies]
}

export const useFetchTaxonomyByUrl = (url: string): [Taxonomy | undefined, () => void] => {
  const [taxonomy, setTaxonomy] = useState<Taxonomy | undefined>()

  const fetchTaxonomies = useCallback(async () => {
    const maybeTaxonomy = await fetchTaxonomyTree(url)

    if (maybeTaxonomy) {
      setTaxonomy(maybeTaxonomy)
    }
  }, [url])

  return [taxonomy, fetchTaxonomies]
}

export const fetchTaxonomyTree = async (url: string): Promise<Taxonomy | undefined> => {
  // fetch('/').then(async (resp) => setTaxonomy(await resp.json()))

  for (const taxonomy of testTaxonomies) {
    const maybeTaxonomy = _findTaxonomyTree(taxonomy, url, {} as Taxonomy)
    if (maybeTaxonomy) {
      return maybeTaxonomy
    }
  }
}

export const fetchTaxonomyByUrl = async (url: string): Promise<Taxonomy | undefined> => {
  // fetch('/').then(async (resp) => setTaxonomy(await resp.json()))

  for (const taxonomy of testTaxonomies) {
    const maybeTaxonomy = _findOnlyTaxonomy(taxonomy, url)
    if (maybeTaxonomy) {
      return maybeTaxonomy
    }
  }
}

export const fetchTaxonomyById = async (id: string): Promise<Taxonomy | undefined> => {
  for (const taxonomy of testTaxonomies) {
    const maybeTaxonomy = _findOnlyTaxonomyById(taxonomy, id)
    if (maybeTaxonomy) {
      return maybeTaxonomy
    }
  }
}

const _findTaxonomyTree = (taxonomy: Taxonomy | undefined, url: string, path: Taxonomy): Taxonomy | void => {
  if (taxonomy && matchPath(url, taxonomy.url)) {
    return Object.keys(path).length ?
      {...path, children: [{ ...taxonomy, children: undefined }]} :
      { ...taxonomy, children: undefined }
  }

  if (!taxonomy || !taxonomy.children) return

  for (const taxChild of taxonomy.children) {
    const maybeTaxonomy = _findTaxonomyTree(taxChild, url, {...taxonomy, children: [taxChild]})
    if (maybeTaxonomy) {
      return Object.keys(path).length ? {...path, children: [maybeTaxonomy]} : maybeTaxonomy
    }
  }
}

const _findOnlyTaxonomy = (taxonomy: Taxonomy | undefined, url: string): Taxonomy | void => {
  if (taxonomy && matchPath(url, taxonomy.url)) {
    return taxonomy
  }

  if (!taxonomy || !taxonomy.children) return

  for (const taxChild of taxonomy.children) {
    return _findOnlyTaxonomy(taxChild, url)
  }
}

// will remove once moved in BE
const _findOnlyTaxonomyById = (taxonomy: Taxonomy | undefined, id: string): Taxonomy | void => {
  if (taxonomy && id === taxonomy.id) {
    return taxonomy
  }

  if (!taxonomy || !taxonomy.children) return

  for (const taxChild of taxonomy.children) {
    return _findOnlyTaxonomyById(taxChild, id)
  }
}

export const fetchArticleComments = async (id: string): Promise<Comment[]> => {
  return comments.filter((comment) => comment.articleId === id) ?? []
}