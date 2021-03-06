import React from 'react'
import styled from 'styled-components'
import { Section } from 'react-scroll-section'
import { Heading } from 'rebass'
import Slide from 'react-reveal/Slide'

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  scroll-behavior: smooth;
`

const DefaultBackground = () => <div />

const Container = ({ id, children, Background = DefaultBackground }) => (
  <Section id={id} style={{ position: 'relative' }}>
    <Background />
    <SectionContainer>{children}</SectionContainer>
  </Section>
)

const Header = ({ name }) => (
  <Slide left>
    <Heading color="primary_dark" mt={10} mb={4} ml={3}>
      <div>{name}</div>
    </Heading>
  </Slide>
)

export default {
  Container,
  Header,
}
