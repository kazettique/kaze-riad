import React from 'react'
import { RouteProps, Route } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

const pageVariants: Variants = {
  initial: {
    x: '100%',
    opacity: 1,
    transition: { duration: 0.5 },
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    opacity: 1,
    x: '-100%',
    transition: { duration: 0.5 },
  },
}

const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route {...props}>
      <motion.div className='flex-grow flex' initial='initial' animate='in' exit='out' variants={pageVariants}>
        {children}
      </motion.div>
    </Route>
  )
}

export default MotionRoute
