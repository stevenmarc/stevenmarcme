import React from 'react'
import { Image, Text, Flex, Box } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import ImageSubtitle from '../components/ImageSubtitle'
import { CardContainer, Card } from '../components/Card'
import SocialLink from '../components/SocialLink'
import Hide from '../components/Hide'

const CARD_HEIGHT = '200px'

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)'

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary_dark} 5px solid;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT} / 1.2;
  padding: 40px 10px 40px 10px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`

const Project = ({
  name,
  description,
  projectUrl,
  type,
  publishedDate,
  image,
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ProjectImage src={image.src.publicURL} alt={image.name} />
        <ProjectTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={5}>
              <SocialLink
                name="See project"
                fontAwesomeIcon="globe"
                url={projectUrl}
              />
            </Box>
          </Flex>
          <ImageSubtitle
            bg="primaryLight"
            color="black"
            y="bottom"
            x="right"
            round
          >
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{publishedDate}</ImageSubtitle>
          </Hide>
        </ProjectTag>
      </ImageContainer>
    </Flex>
  </Card>
)

const Projects = () => (
  <Section.Container id="projects">
    <Section.Header name="Some latest projects" />
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          file(name: { eq: "projects" }) {
            childDataJson {
              projects {
                name
                image {
                  name
                  src {
                    publicURL
                  }
                }
                description
                projectUrl
                publishedDate(formatString: "YYYY")
                type
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <CardContainer minWidth="350px">
            {data.file.childDataJson.projects.map((p, i) => (
              <Fade bottom delay={i * 200}>
                <Project key={p.name} {...p} />
              </Fade>
            ))}
          </CardContainer>
        )
      }}
    />
  </Section.Container>
)

export default Projects
