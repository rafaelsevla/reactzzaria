import React, { PureComponent } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

var firebaseConfig = {
  apiKey: 'AIzaSyD0NMO1BuAICNJ3o4bLU54Ws6UpTrLMcLs',
  authDomain: 'reactzzaria-40602.firebaseapp.com',
  databaseURL: 'https://reactzzaria-40602.firebaseio.com',
  projectId: 'reactzzaria-40602',
  storageBucket: '',
  messagingSenderId: '806464840510',
  appId: '1:806464840510:web:0afcb88392c85a7c84c26f'
}

firebase.initializeApp(firebaseConfig)

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isUserLoggedIn: !!user,
        user
      })
    })
  }

  logout () {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  login = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          isUserLoggedIn: false,
          user: null
        })
      })
  }

  render () {
    const { isUserLoggedIn, user } = this.state

    return (
      <Container>
        <Grid container justify='center' spacing={40}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={12} container justify='center'>
            {isUserLoggedIn && (
              <>
                <pre>{user.displayName}</pre>
                <Button variant='contained' onClick={this.logout}>
                  Sair
                </Button>
              </>
            )}
            {!isUserLoggedIn && (
              <GitHubButton onClick={this.login}>
                Entrar com GitHub
              </GitHubButton>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 20px;
`
const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    padding: 15px;
    max-width: 480px;
    text-transform: none;
  }
`

export default Login
