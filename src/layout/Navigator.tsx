import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navigator: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.nav
            initial='close'
            animate='open'
            exit='close'
            variants={{
              close: {
                x: -200,
                opacity: 0.2,
                transition: {
                  duration: 0.2,
                  ease: 'circIn',
                },
              },
              open: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: 'circOut',
                },
              },
            }}
            className='bg-gray-500'
            style={{
              position: 'absolute',
              width: 200,
              height: '100vh',
              zIndex: 9999,
            }}
          >
            <NavLink to='/a'>
              <div className='bg-gray-600 hover:bg-blue-700 text-gray-100 rounded-full m-3 p-3'>Page A</div>
            </NavLink>
            <NavLink to='/b'>
              <div className='bg-gray-600  hover:bg-blue-700 text-gray-100 rounded-full m-3 p-3'>Page B</div>
            </NavLink>
            <NavLink to='/'>
              <div className='bg-gray-600 hover:bg-blue-700 text-gray-100 rounded-full m-3 p-3'>Home</div>
            </NavLink>
          </motion.nav>
          <motion.div
            className='w-full h-full bg-gray-900 absolute'
            initial='close'
            animate='open'
            exit='close'
            variants={{
              close: {
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: 'circIn',
                },
              },
              open: {
                opacity: 0.75,
                transition: {
                  duration: 0.2,
                  ease: 'circOut',
                },
              },
            }}
          />
        </>
      )}
    </AnimatePresence>
  )
}

export default Navigator
