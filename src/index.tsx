import './index.css'
import { AddressBook } from './routes/AddressBook'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { Competition } from './routes/Competition'
import { Dashboard } from './routes/Dashboard'
import { Layout } from './Layout'
import { RegisterOffice } from './routes/RegisterOffice'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { urls } from './utils/urls'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: urls.website.path,
    element: <App />,
  },
  {
    path: urls.website.path,
    element: <Layout />,
    children: [
      {
        path: urls.apps.dashboard.link,
        element: <Dashboard />,
      },
      {
        path: urls.apps.addressBook.link,
        element: <AddressBook />,
      },
      {
        path: urls.apps.competition.link,
        element: <Competition />,
      },
      {
        path: urls.apps.registerOffice.link,
        element: <RegisterOffice />,
      },
    ],
  },
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
)
