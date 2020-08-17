import React from 'react'
import {
  RouteProps,
  RedirectProps,
  Switch,
  Route,
  Prompt,
  Redirect,
  useLocation
} from 'react-router-dom'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useSelector, useAction } from '../store'
import Navigator from './Navigator'

import Home from '../views/Home'
import PageA from '../views/PageA'
import PageB from '../views/PageB'

const Viewer: React.FC = () => {
  const open = useSelector(state => state.app.navOpen)
  const { setNavigator } = useAction().app
  React.useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (open && e.clientX > 200) {
        setNavigator(false)
      }
    }
    window.addEventListener('click', cb)
    return () => {
      window.removeEventListener('click', cb)
    }
  }, [open, setNavigator])

  return (
    <div className="bg-gray-100 text-gray-800 h-screen flex flex-col relative">
      <header className="bg-green-500 p-3">
        <button onMouseDown={() => setNavigator(true)}>Nav</button>
      </header>
      <ViewRouter />
      <Prompt
        message={next => {
          setNavigator(false)
          return true
        }}
      />
      <Navigator open={open} />
    </div>
  )
}

export default Viewer

const pageVariants: Variants = {
  initial: {
    x: '100%',
    opacity: 1,
    transition: { duration: 0.5 }
  },
  in: {
    x: 0,
    opacity: 1
  },
  out: {
    opacity: 1,
    x: '-100%',
    transition: { duration: 0.5 }
  }
}

const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route {...props}>
      <motion.div
        className="flex-grow flex"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </Route>
  )
}

const MotionRedirect: React.FC<RedirectProps> = ({ children, ...props }) => (
  <motion.div exit="undefined">
    <Redirect {...props} />
  </motion.div>
)

const ViewRouter: React.FC = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <MotionRoute path="/" exact>
          <Home />
        </MotionRoute>
        <MotionRoute path="/a">
          <PageA />
        </MotionRoute>
        <MotionRoute path="/b">
          <PageB />
        </MotionRoute>
        {/* <Redirect to="/" /> */}
        <MotionRedirect to="/" />
      </Switch>
    </AnimatePresence>
  )
}
