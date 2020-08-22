import React from 'react'
import { RouteProps, Route } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'

const pageVariants: Variants = {
  initial: {
    x: '12%',
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.15 },
  },
}

const MotionRoute: React.FC<RouteProps> = ({ children, ...props }) => {
  return (
    <Route {...props}>
      <motion.div className='flex-grow flex relative' initial='initial' animate='in' exit='out' variants={pageVariants}>
        {children}
      </motion.div>
    </Route>
  )
}

export default MotionRoute
