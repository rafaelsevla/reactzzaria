import React, { useContext } from 'react'
import styled from 'styled-components'
import { Card, Grid, Typography } from '@material-ui/core'
import { CardLink, Divider, H3, H4, HeaderContent, PizzasGrid } from 'ui'
import { singularOrPlural } from 'utils'
import { AuthContext } from 'contexts/auth'
import pizzaSizes from 'fake-data/pizzas-sizes'

import { CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <>
      <HeaderContent>
        <H3>O que vai ser hoje {userInfo.user.firstName}? =)</H3>

        <H4>Escolha o tamanho da pizza:</H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzaSizes.map(pizza => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink to={{ pathname: CHOOSE_PIZZA_FLAVOURS, state: pizza }}>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours}{' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Pizza = styled.div`
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`

export default ChoosePizzaSize
