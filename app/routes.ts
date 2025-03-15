import { useRoutes } from 'react-router'

import Layout from '~/layouts/Main'
import Home from '~/views/Home'
import About from '~/views/About'
import NotFound from '~/views/NotFound'

export default function Routes () {
  return useRoutes([
    {
      Component: Layout,
      children: [
        { Component: Home, index: true },
        { Component: About, path: 'about' },
        { Component: NotFound, path: '*' }
      ]
    }
  ])
}
