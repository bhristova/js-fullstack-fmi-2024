type Props = {
  children: React.ReactNode,
  isVisible: boolean
}

export const Hideable: React.FC<Props> = ({ isVisible, children }) => {
  return isVisible ? <>{children}</> : null
}
