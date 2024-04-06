import { GuestMainMenu } from 'src/components/MainMenu/GuestMainMenu'

type Props = {
  children?: React.ReactNode
}

export const GuestPageFrame: React.FC<Props> = ({ children }) => {
  return (
    <>
      <GuestMainMenu/>
      {children}
    </>
  )
}