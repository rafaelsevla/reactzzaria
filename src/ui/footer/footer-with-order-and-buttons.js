import React from 'react'
import t from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import {
  Button as MaterialButton,
  Grid,
  Typography
} from '@material-ui/core'
import styled from 'styled-components'
import { singularOrPlural } from 'utils'

import { useAuth } from 'hooks'

function FooterWithOrderAndButtons ({ buttons, history, location }) {
  const { userInfo } = useAuth()

  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize

  return (
    <Grid container>
      <OrderContainer>
        <Typography>
          <b>{userInfo.user.firstName} seu pedido é:</b>
        </Typography>
        <Typography>
            Pizza <b>{name.toUpperCase()}</b> - ({slices}{' '}
          {singularOrPlural(slices, 'fatia', 'fatias')}, {flavours}{' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')})
        </Typography>

        {pizzaFlavours && (
          <Typography>
            {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
            <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
          </Typography>
        )}

      </OrderContainer>
      <ButtonsContainer>

        <Button
          {...buttons.back}
          component='a'
          onClick={(e) => {
            e.preventDefault()
            history.goBack()
          }}
        />

        <Button
          {...buttons.action}
          color='primary'
          component={Link}
        />

      </ButtonsContainer>
    </Grid>
  )
}

FooterWithOrderAndButtons.propTypes = {
  buttons: t.object.isRequired,
  history: t.object.isRequired,
  location: t.object.isRequired
}

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`

const ButtonsContainer = styled(Grid).attrs({
  item: true
})`
  && {
    align-items: center;
    display: flex;
  }
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

export default withRouter(FooterWithOrderAndButtons)
