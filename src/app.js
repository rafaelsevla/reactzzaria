import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CssBaseLine } from '@material-ui/core'
import { MainPage } from 'pages/main'
import { Login } from 'pages/login'

const App = () => (
  <Fragment>
    <CssBaseLine />

    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={MainPage} />
      </Switch>
    </BrowserRouter>
  </Fragment>
)

export default App
