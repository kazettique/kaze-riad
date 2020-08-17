import React from 'react'
import { Route, Switch } from 'react-router'
import Viewer from './Viewer'

function AppContainer (): JSX.Element {
  return (
    <Switch>
      <Route>
        <Viewer />
      </Route>
    </Switch>
  )
}

export default AppContainer
