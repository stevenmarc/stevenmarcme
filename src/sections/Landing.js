import React, { Fragment } from 'react'
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
  display: 'grid',
  gridTemplateColumns: 'minmax(200px, 600px) 1fr',
  gridTemplateRows: '300px auto',
}

export default () => (
  <Section.Container style={bgImageStyle}>
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
          <Fragment>
            <Heading
              textAlign="center"
              as="h2"
              color="white"
              fontFamily="Quicksand, sans-serif"
              fontWeight="300"
              fontSize={[3, 4, 5]}
              mb={[3, 4, 5]}
            >
              {title}
            </Heading>

            <Heading
              as="h3"
              color="white"
              fontSize={[2, 3, 4]}
              mb={[3, 4, 5]}
              textAlign="left"
            >
              <div>
                <Text
                  width={[300, 500]}
                  style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 100,
                    fontSize: '1.5em',
                    padding: '0px 20px 20px 40px',
                    color: 'white',
                  }}
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            </Heading>
          </Fragment>
        )
      }}
    />
  </Section.Container>
)
