import { Button, Layout } from 'antd'
import './App.css'
import HomePage from './pages/Home'
import Cities from './pages/Cities'
import Error404 from './pages/Error404'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '*',
        element: <Error404 />
      }

    ]
  },

])

function App() {

  return (
    <Layout theme="dark" id='main_container'>
      <RouterProvider router={router} />
      {/* <HomePage /> */}
    </Layout>
  )
}

export default App
