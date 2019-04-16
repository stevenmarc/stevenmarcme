import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Flex, Box, Text } from 'rebass'
import Section from '../components/Section'

const backgroundImage = require('../images/steven_bg.jpg')

const bgImageStyle = {
  minHeight: '100vh',
  minWidth: 200,
  width: '100%',
  height: 'auto',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: '60% 0',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
}

const Landing = () => (
  <Section.Container id="landing">
    <StaticQuery
      query={graphql`
        query LandingSectionQuery {
          file(name: { eq: "landing" }) {
            childDataJson {
              title
              body
            }
          }
        }
      `}
      render={data => {
        const { title, body } = data.file.childDataJson

        return (
          <Flex justifyContent="left" flexWrap="wrap" style={bgImageStyle}>
            <Box width={2 / 3} p={2}>
              <Heading
                as="h2"
                textAlign="left"
                color="white"
                fontFamily="Quicksand, sans-serif"
                fontWeight="300"
                fontSize={[3, 4, 5]}
                padding="5em 1em 1em 1em"
              >
                {title}
              </Heading>
              <Heading
                as="h3"
                color="white"
                fontSize={[2, 3, 4]}
                textAlign="left"
                fontFamily="Roboto, sans-serif"
                fontWeight="100"
                padding="1em"
                width={[300, 500]}
              >
                <Text dangerouslySetInnerHTML={{ __html: body }} />
              </Heading>
            </Box>
          </Flex>
        )
      }}
    />
  </Section.Container>
)

export default Landing
