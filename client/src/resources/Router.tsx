import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from 'src/App'
import { ArticlesPage, articlePageLoader } from 'src/features/Article'
import { HomePage, homePageLoader } from 'src/features/Home'
import { TaxonomyPage, taxonomyPageLoader } from 'src/features/Taxonomy'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<>error!</>}>
      <Route path="/" element={<HomePage />} loader={homePageLoader} />
      <Route path="/article/:articleId" element={<ArticlesPage />} loader={articlePageLoader} />
      <Route path="/profile" element={<div>profile</div>} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="/login" element={<div>login</div>} />
      <Route path="/admin/taxonomies" element={<div>admin/taxonomies</div>} />
      <Route path="/admin/articles" element={<div>admin/articles</div>} />
      <Route path="/admin/users" element={<div>admin/users</div>} />
      <Route path="/admin/users/:userId" element={<div>admin/users userId</div>} />
      <Route path="/admin/resources" element={<div>admin/resources</div>} />
      <Route path="*" element={<TaxonomyPage />} loader={taxonomyPageLoader} />
    </Route>
  )
)

export const Router = () => <RouterProvider router={router} />
