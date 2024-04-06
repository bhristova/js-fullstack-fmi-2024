import { useState } from "react"
import { GuestPageFrame, UserPageFrame } from "../PageFrame"
import { TaxonomyMenu } from "../TaxonomyMenu"
import { Outlet, useMatches } from "react-router-dom"

type Props = {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ ...props }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  // const { articleId, taxonomyUrl } = useGetDataFromUrlSlug()
  
  if (isUserLoggedIn) {
    return (
      <>
        <UserPageFrame {...props}>
          {/* <TaxonomyMenu taxonomyUrl={taxonomyUrl} /> */}
          <Outlet />
        </UserPageFrame>
        <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
      </>
    )
  }

  return (
    <>
      <GuestPageFrame  {...props}>
        {/* <TaxonomyMenu taxonomyUrl={route.pathname} /> */}
        <Outlet />
      </GuestPageFrame>
      <button onClick={() => setIsUserLoggedIn(true)}>Login</button>
    </>
  )
}

export default Layout

const useGetDataFromUrlSlug = () => {
  const [route] = useMatches()

  if (!route.pathname || route.pathname === '/') {
    return {}
  }

  if (route.pathname.startsWith('art')) {
    return {
      articleId: route.pathname,
    }
  }
  
  return {
    taxonomyUrl: route.pathname,
  }
}

// const useGetPageData = (): { articleId: string, taxonomyUrl: string} | { taxonomyUrl: string } => {

// }