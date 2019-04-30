import React from 'react'
import Section from '../components/Section'
import { StaticQuery, graphql } from 'gatsby'
import { Heading as BaseHeading, Flex, Box, Text as BaseText } from 'rebass'
import styled from 'styled-components'

const Heading = styled(BaseHeading)`
  font-family: Quicksand, sans-serif;
  font-weight: 300;
`

const Text = styled(BaseText)`
  font-family: Roboto, sans-serif;
  font-weight: 100;
`

const About = () => (
  <Section.Container id="about">
    <StaticQuery
      query={graphql`
        query AboutSectionQuery {
          file(name: { eq: "about" }) {
            childDataJson {
              title
              bodies {
                title
                description
                descriptions {
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { bodies } = data.file.childDataJson
        return (
          <Flex m="10px" justifyContent="left" flexWrap="wrap">
            <Box width={[1, 1, 1 / 2]} p={2}>
              <Heading fontSize={[3, 4, 5]} padding="0.5em 1em 1em 1em">
                {bodies[0].title}
              </Heading>
              <Text
                fontSize={[2, 3, 4]}
                padding="0.5em 1em 1em 1em"
                dangerouslySetInnerHTML={{ __html: bodies[0].description }}
              />

              <Heading fontSize={[3, 4, 5]} padding="0.5em 1em 1em 1em">
                {bodies[1].title}
              </Heading>

              <Text
                fontSize={[2, 3, 4]}
                padding="0.5em 1em 1em 1em"
                dangerouslySetInnerHTML={{ __html: bodies[1].description }}
              />
            </Box>
            <Box width={[1, 1, 1 / 2]} p={2}>
              <Heading fontSize={[3, 4, 5]} padding="0.5em 1em 0em 1em">
                {bodies[2].title}
              </Heading>
              <Heading fontSize={[2, 3, 4]} padding="1em 1em 0em 1em">
                {bodies[2].descriptions[0].title}
              </Heading>

              <Text
                fontSize={[2, 3, 4]}
                padding="1em"
                dangerouslySetInnerHTML={{
                  __html: bodies[2].descriptions[0].description,
                }}
              />

              <Heading fontSize={[2, 3, 4]} padding="1em 1em 0em 1em">
                {bodies[2].descriptions[1].title}
              </Heading>

              <Text
                fontSize={[2, 3, 4]}
                padding="1em"
                dangerouslySetInnerHTML={{
                  __html: bodies[2].descriptions[1].description,
                }}
              />
            </Box>
          </Flex>
        )
      }}
    />
  </Section.Container>
)

export default About
