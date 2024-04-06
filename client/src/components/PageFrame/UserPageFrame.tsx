import { UserMainMenu } from 'src/components/MainMenu/UserMainMenu'

type Props = {
  children?: React.ReactNode
}

export const UserPageFrame: React.FC<Props> = ({ children }) => {
  return (
    <>
      <UserMainMenu/>
      {children}
    </>
  )
}
