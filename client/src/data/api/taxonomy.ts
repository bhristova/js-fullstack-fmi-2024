import { useCallback, useState } from "react"
import { Taxonomy } from "src/data"
import { taxonomies as testTaxonomies } from "../testData"
import { matchPath, matchRoutes } from "react-router-dom"

export const useFetchTaxonomies = (): [Array<Taxonomy>, () => void] => {
  const [taxonomies, setTaxonomies] = useState(testTaxonomies)
  const fetchTaxonomies = useCallback(() => {
    fetch('/').then(async (resp) => setTaxonomies(await resp.json()))
  }, [])

  return [taxonomies, fetchTaxonomies]
}

export const useFetchTaxonomyByUrl = (url: string): [Taxonomy | undefined, () => void] => {
  const [taxonomy, setTaxonomy] = useState<Taxonomy | undefined>()

  const fetchTaxonomies = useCallback(() => {
    // fetch('/').then(async (resp) => setTaxonomy(await resp.json()))
    testTaxonomies.forEach((tax) => {
      const maybeTaxonomy = _findTaxonomy(tax, url, {} as Taxonomy)
      if (maybeTaxonomy) {
        setTaxonomy(maybeTaxonomy)
      }
    })
  }, [url])

  return [taxonomy, fetchTaxonomies]
}

const _findTaxonomy = (taxonomy: Taxonomy | undefined, url: string, path: Taxonomy): Taxonomy | void => {
  if (taxonomy && matchPath(url, taxonomy.url)) {
    return Object.keys(path).length ?
      {...path, children: [{ ...taxonomy, children: undefined }]} :
      { ...taxonomy, children: undefined }
  }
  

  if (!taxonomy || !taxonomy.children) return

  for (let taxChild of taxonomy.children) {
    const maybeTaxonomy = _findTaxonomy(taxChild, url, {...taxonomy, children: [taxChild]})
    if (maybeTaxonomy) {
      return Object.keys(path).length ? {...path, children: [maybeTaxonomy]} : maybeTaxonomy
    }
  }
}

