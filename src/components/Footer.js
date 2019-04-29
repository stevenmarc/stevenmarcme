import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Box } from 'rebass'
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
            borderBottom: 'white 3px solid',
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
