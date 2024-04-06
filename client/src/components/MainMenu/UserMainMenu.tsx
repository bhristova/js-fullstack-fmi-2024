import { Container, Link, Menu } from "src/visual"
import { Logo, SearchBar } from "./components"

export const UserMainMenu = () => {
  return (
    <Menu>
      <Logo/>
      <Container>
        <SearchBar />
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </Container>
    </Menu>
  )
}