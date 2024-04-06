import { Container, Link, Menu } from "src/visual"
import { Taxonomy } from "../../data/types/Taxonomy"
import { useFetchTaxonomyByUrl } from "src/data"
import { useEffect } from "react"

type Props = {
  taxonomyUrl: string
}

export const TaxonomyMenu: React.FC<Props> = ({ taxonomyUrl }) => {
  const [taxonomy, fetchTaxonomy] = useFetchTaxonomyByUrl(taxonomyUrl)

  useEffect(() => {
    fetchTaxonomy()
  }, [taxonomyUrl])

  if (!taxonomy) return null

  return (
    <Menu>
      <Container>
        {renderTaxonomy(taxonomy)}
      </Container>
    </Menu>
  )
}

const renderTaxonomy = (taxonomy: Taxonomy | undefined): React.ReactNode => {
  if (!taxonomy) return null

  return (
    <>
      <Link key={taxonomy.id} to={taxonomy.url}>{taxonomy.label}</Link>
      {!!taxonomy.children?.length && '>'}
      {taxonomy.children?.length === 1 ? renderTaxonomy(taxonomy.children[0]) : null}
    </>
  )
}
