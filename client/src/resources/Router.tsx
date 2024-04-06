import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from 'src/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} errorElement={<>error!</>}>
      <Route path="/home" element={<div>home</div>} />
      <Route path="*" element={<div>no home</div>} />
    </Route>
  )
)

export const Router = () => <RouterProvider router={router} />