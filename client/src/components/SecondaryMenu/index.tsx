import { useEffect } from "react"
import { useFetchTaxonomiesByParentId } from "src/data"
import { Container, Link, Menu } from "src/visual"

type Props = {
  parentTaxonomyId?: string
}

export const SecondaryMenu: React.FC<Props> = ({ parentTaxonomyId }) => {
  const [taxonomies, fetchTaxonomies] = useFetchTaxonomiesByParentId()

  useEffect(() => {
    fetchTaxonomies(parentTaxonomyId)
  }, [fetchTaxonomies, parentTaxonomyId])

  return (
    <Menu>
      <Container>
        {taxonomies.map((taxonomy, index) => (
          <>
            <Link key={taxonomy.id} to={taxonomy.url}>{taxonomy.label}</Link>
            {index < taxonomies.length - 1 && '|'}
          </>
        ))}
      </Container>
    </Menu>
  )
}
