import { Container, Link, Menu } from "src/visual"
import { Logo, SearchBar } from "./components"

export const GuestMainMenu: React.FC = () => {
  return (
    <Menu>
      <Logo/>
      <Container >
        <SearchBar />
        <Link to="/">Home</Link>
        <Link to="/login">Logout</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin panel</Link>
      </Container>
    </Menu>
  )
}