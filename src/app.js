import React, { lazy, Suspense, useContext, useEffect } from 'react'
import t from 'prop-types'
import { Route, Redirect, Switch } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App ({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('dados do usuário:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  if (isUserLoggedIn) {
    console.log('usuario está logado')
    if (location.pathname === '/login') {
      console.log('usuario está logado e na pagina de login')
      return <Redirect to='/' />
    } else {
      console.log('usuario está logado e não está na pagina de login')
    }
  } else {
    console.log('usuario não está logado')
    if (location.pathname !== '/login') {
      return <Redirect to='/login' />
    } else {
      console.log('usuário nao está logado e na pagina de login')
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
