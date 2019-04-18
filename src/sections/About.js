import React from 'react'
import Section from '../components/Section'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Flex, Box, Text } from 'rebass'

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
              <Heading
                as="h2"
                textAlign="left"
                color="black"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[3, 4, 5]}
                padding="0.5em 1em 1em 1em"
              >
                {bodies[0].title}
              </Heading>
              <Heading
                as="h3"
                color="black"
                fontSize={[2, 3, 4]}
                textAlign="left"
                fontFamily="Roboto, sans-serif"
                fontWeight="100"
                padding="0.5em 1em 1em 1em"
              >
                <Text
                  dangerouslySetInnerHTML={{ __html: bodies[0].description }}
                />
              </Heading>
              <Heading
                as="h2"
                textAlign="left"
                color="black"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[3, 4, 5]}
                padding="0.5em 1em 1em 1em"
              >
                {bodies[1].title}
              </Heading>
              <Heading
                as="h3"
                color="black"
                fontSize={[2, 3, 4]}
                textAlign="left"
                fontFamily="Roboto, sans-serif"
                fontWeight="100"
                padding="0.5em 1em 1em 1em"
              >
                <Text
                  dangerouslySetInnerHTML={{ __html: bodies[1].description }}
                />
              </Heading>
            </Box>
            <Box width={[1, 1, 1 / 2]} p={2}>
              <Heading
                as="h2"
                textAlign="left"
                color="black"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[3, 4, 5]}
                padding="1em 1em 1em 1em"
              >
                {bodies[2].title}
              </Heading>
              <Heading
                as="h2"
                textAlign="left"
                color="black"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[2, 3, 4]}
                padding="1em 1em 1em 1em"
              >
                {bodies[2].descriptions[0].title}
              </Heading>
              <Heading
                as="h3"
                color="black"
                fontSize={[2, 3, 4]}
                textAlign="left"
                fontFamily="Roboto, sans-serif"
                fontWeight="100"
                padding="1em"
              >
                <Text
                  dangerouslySetInnerHTML={{
                    __html: bodies[2].descriptions[0].description,
                  }}
                />
              </Heading>
              <Heading
                as="h2"
                textAlign="left"
                color="black"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[2, 3, 4]}
                padding="1em 1em 1em 1em"
              >
                {bodies[2].descriptions[1].title}
              </Heading>
              <Heading
                as="h3"
                color="black"
                fontSize={[2, 3, 4]}
                textAlign="left"
                fontFamily="Roboto, sans-serif"
                fontWeight="100"
                padding="1em"
              >
                <Text
                  dangerouslySetInnerHTML={{
                    __html: bodies[2].descriptions[1].description,
                  }}
                />
              </Heading>
            </Box>
          </Flex>
        )
      }}
    />
  </Section.Container>
)

export default About
