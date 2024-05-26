import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    xanthous: "#ffc143",
    paynesGray: "#495867",
    argentinianBlue: "#49b6fc",
    ghostWhite: "#f7f7ff",
    bittersweet: "#fe5f55",
    vanilla: "#f2ebae",
    black: "#000",
  },
  breakpoints: {
    mobile: "320",
    tablet: "768",
    desktop: "1024"
  },
}

type Props = {
  children?: React.ReactNode
}

const Theme: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme;
