import React from 'react'
import t from 'prop-types'
import { Footer } from 'ui'
import styled from 'styled-components'

function FooterCheckout ({ children, justifyContent }) {
  return (
    <Footer>
      <FooterContent justifyContent={justifyContent}>
        {children}
      </FooterContent>
    </Footer>
  )
}

FooterCheckout.propTypes = {
  children: t.node.isRequired,
  justifyContent: t.string
}

const FooterContent = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-end'};
`

export default FooterCheckout
