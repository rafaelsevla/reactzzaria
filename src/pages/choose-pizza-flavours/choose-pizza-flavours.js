import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Card as MaterialCard,
  Grid,
  Typography
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { CardLink, Content, Divider, H4, Footer, HeaderContent, PizzasGrid } from 'ui'
import { singularOrPlural, toMoney } from 'utils'
import { HOME } from 'routes'

import pizzasFlavours from 'fake-data/pizzas-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  const handleCheckCheckbox = pizzaId => e => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes(checkboxes => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Escolha até {flavours}{' '}
            {(singularOrPlural(flavours), 'sabor', 'sabores')}:
          </H4>
        </HeaderContent>

        <PizzasGrid>
          {pizzasFlavours.map(pizza => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <Checkbox
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleCheckCheckbox(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />

                  <Divider />

                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>
                    {toMoney(pizza.value[id])}
                  </Typography>
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Content>

      <Footer />
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

const Card = styled(MaterialCard)`
  && {
    border: 2px solid transparent;
    border-color: ${({ theme, checked }) =>
    checked ? theme.palette.secondary.light : ''};
  }
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
