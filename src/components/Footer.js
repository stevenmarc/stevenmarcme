import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import Fade from 'react-reveal/Fade'

const FooterContainer = styled.footer`
  padding: 4em 1em 1em 1em;
  background: ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.colors.background};
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 420px) {
    display: none;
  }
`

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <span>
        <Text
          mb={2}
          pb={1}
          style={{
            textTransform: 'uppercase',
            display: 'table',
          }}
        >
          Powered By SMC
        </Text>
      </span>
    </Fade>
  </FooterContainer>
)

export default Footer
