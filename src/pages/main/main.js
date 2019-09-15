import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'
import Header from './header'

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'))

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback='loading...'>
        <Switch>
          <Route path='/' exact component={ChoosePizzaSize} />
          <Route
            path='/sabores-da-pizza'
            exact
            component={ChoosePizzaFlavours}
          />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: 20px;
`

const style = theme => ({ main: theme.mixins.toolbar })

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
