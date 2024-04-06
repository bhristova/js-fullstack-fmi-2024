import { useFetchTaxonomies } from "src/data"
import { Container, Link, Menu } from "src/visual"

export const SecondaryMenu: React.FC = () => {
  const [taxonomies] = useFetchTaxonomies()
  return (
    <Menu>
      <Container>
        {taxonomies.map((taxonomy, index) => (
          <>
            <Link key={taxonomy.id} to={taxonomy.url}>{taxonomy.label}</Link>
            {index < taxonomies.length - 1 && '>'}
          </>
        ))}
      </Container>
    </Menu>
  )
}
