import { Container, Link } from "src/visual"
import { Taxonomy, useFetchTaxonomyByUrl } from "src/data"
import { useEffect } from "react"
import * as Styled from './styles'

type Props = {
  taxonomyUrl: string
}

export const TaxonomyMenu: React.FC<Props> = ({ taxonomyUrl }) => {
  const [taxonomy, fetchTaxonomy] = useFetchTaxonomyByUrl(taxonomyUrl)

  useEffect(() => {
    fetchTaxonomy()
  }, [fetchTaxonomy, taxonomyUrl])

  if (!taxonomy) return null

  return (
    <Styled.Menu>
      <Container>
        {renderTaxonomy(taxonomy)}
      </Container>
    </Styled.Menu>
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
