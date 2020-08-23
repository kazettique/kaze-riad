import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from './store'

import AppContainer from './layout/AppContainer'

import './styles.css'

export default function App(): React.ReactElement {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  )
}
