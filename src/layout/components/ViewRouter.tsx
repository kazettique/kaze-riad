import React from 'react'
import { useLocation, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MotionRoute from './MotionRoute'
import MotionRedirect from './MotionRedirect'

import Home from '../../views/Home'
import PageA from '../../views/PageA'
import PageB from '../../views/PageB'

const ViewRouter: React.FC = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <MotionRoute path='/' exact>
          <Home />
        </MotionRoute>
        <MotionRoute path='/a'>
          <PageA />
        </MotionRoute>
        <MotionRoute path='/b'>
          <PageB />
        </MotionRoute>
        {/* <Redirect to="/" /> */}
        <MotionRedirect to='/' />
      </Switch>
    </AnimatePresence>
  )
}

export default ViewRouter
