import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Container,
  Divider as MaterialDivider,
  Paper,
  Typography
} from '@material-ui/core'
import {
  Content,
  H4,
  H6,
  OrderInfo
} from 'ui'
import FooterCheckout from 'pages/checkout/footer-checkout'
import { useAuth, useOrder } from 'hooks'
import { CHECKOUT_SUCCESS } from 'routes'

function CheckoutConfirmation () {
  const { userInfo } = useAuth()
  const { sendOrder } = useOrder()

  return (
    <>
      <Content>
        <Header>
          <H4>Oi {userInfo.user.firstName}!</H4>
          <Typography>
            Confere por favor se esta tudo certo com o seu pedido antes de
            finalizar?
          </Typography>
        </Header>

        <Container maxWidth='sm'>
          <PaperContainer>
            <H6>Seu pedido</H6>

            <OrderInfo />
            <Divider />

            <H6>Endereço para entrega:</H6>
            <Typography>
              Rua Tal, 10, compl. bairro, cep: 14810-115 - Cidade / UF
            </Typography>

            <Divider />

            <H6>
              Telefone para contato:
            </H6>
            <Typography>(16) 99746-4613</Typography>
          </PaperContainer>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Efetuar pedido
        </Button>
      </FooterCheckout>
    </>
  )
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

const Divider = styled(MaterialDivider)`
  && {
    margin: ${({ theme }) => theme.spacing(3, 0)};
  }
`

const PaperContainer = styled(Paper)`
  && {
    padding: ${({ theme }) => theme.spacing(3)}px;
  }
`

export default CheckoutConfirmation