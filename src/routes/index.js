import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/login'
import Mine from '../pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to='/home' />
  },
  {
    path: '/home',
    exact: true,
    component: () => <Home />
  },
  {
    path: '/login',
    exact: true,
    component: () => <Login />
  },
  {
    path: '/mine',
    exact: true,
    component: () => <Mine />
  }
]

export default routes
