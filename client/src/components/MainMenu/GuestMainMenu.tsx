import { Container, Link, Menu } from "src/visual"
import { Logo, SearchBar } from "./components"

export const GuestMainMenu: React.FC = () => {
  return (
    <Menu>
      <Logo/>
      <Container >
        <SearchBar />
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </Container>
    </Menu>
  )
}