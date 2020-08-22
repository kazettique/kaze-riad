import React from 'react'
import { Prompt } from 'react-router-dom'
import { useSelector, useAction } from '../store'
import Navigator from './Navigator'
import ViewRouter from './components/ViewRouter'

const Viewer: React.FC = () => {
  const open = useSelector((state) => state.app.navOpen)
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
    <div className='bg-gray-100 text-gray-800 h-screen flex flex-col relative'>
      <header className='bg-green-500 p-3'>
        <button onMouseDown={() => setNavigator(true)}>Nav</button>
      </header>
      <ViewRouter />
      <Prompt
        message={(next) => {
          setNavigator(false)
          return true
        }}
      />
      <Navigator open={open} />
    </div>
  )
}

export default Viewer
