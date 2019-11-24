import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Header from './header'

import * as routes from 'routes'

const ChoosePizzaSize = lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = lazy(() => import('pages/choose-pizza-flavours'))
const ChoosePizzaQuantity = lazy(() => import('pages/choose-pizza-quantity'))
const Checkout = lazy(() => import('pages/checkout'))
const CheckoutConfirmation = lazy(() => import('pages/checkout-confirmation'))

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Suspense fallback='loading...'>
      <Switch>
        <Route path={routes.HOME} exact component={ChoosePizzaSize} />

        <Route
          path={routes.CHOOSE_PIZZA_FLAVOURS}
          component={ChoosePizzaFlavours}
        />

        <Route
          path={routes.CHOOSE_PIZZA_QUANTITY}
          component={ChoosePizzaQuantity}
        />

        <Route
          path={routes.CHECKOUT_CONFIRMATION}
          exact
          component={CheckoutConfirmation}
        />

        <Route
          path={routes.CHECKOUT}
          component={Checkout}
        />
      </Switch>
    </Suspense>
  </>
)

const style = theme => ({ main: theme.mixins.toolbar })

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
