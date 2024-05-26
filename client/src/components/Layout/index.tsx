import { useState } from "react"
import { GuestPageFrame, UserPageFrame } from "../PageFrame"
import { Outlet } from "react-router-dom"
import * as Styled from './styles'

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ ...props }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  if (isUserLoggedIn) {
    return (
      <>
        <Styled.Layout>
          <UserPageFrame {...props}>
              <Outlet />
          </UserPageFrame>
        </Styled.Layout>
        <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
      </>
    )
  }

  return (
    <>
      <GuestPageFrame  {...props}>
        {/* <TaxonomyMenu taxonomyUrl={route.pathname} /> */}
        <Styled.Layout>
          <Outlet />
        </Styled.Layout>
      </GuestPageFrame>
      <button onClick={() => setIsUserLoggedIn(true)}>Login</button>
    </>
  )
}

export default Layout
