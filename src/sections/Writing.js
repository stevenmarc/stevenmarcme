import React from 'react'
import { Heading, Text } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Section from '../components/Section'
import { CardContainer, Card } from '../components/Card'

const parsePost = postFromGraphql => {
  const MEDIUM_CDN = 'https://cdn-images-1.medium.com/max/400'
  const MEDIUM_URL = 'https://medium.com'
  const { id, uniqueSlug, createdAt, title, virtuals, author } = postFromGraphql
  const image =
    virtuals.previewImage.imageId &&
    `${MEDIUM_CDN}/${virtuals.previewImage.imageId}`
  return {
    id,
    title,
    time: virtuals.readingTime,
    date: createdAt,
    text: virtuals.subtitle,
    image,
    url: `${MEDIUM_URL}/${author.username}/${uniqueSlug}`,
  }
}

const edgeToArray = data => data.edges.map(edge => edge.node)

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary_dark} 5px solid;
`

const Post = ({ title, text, image, url, date, time }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <Text ml={3}>{`${date} - ${Math.ceil(time)} min`}</Text>
  </Card>
)

const Writing = () => (
  <StaticQuery
    query={graphql`
      query MediumPostQuery {
        allMediumPost(limit: 6, sort: { fields: createdAt, order: DESC }) {
          edges {
            node {
              id
              uniqueSlug
              title
              createdAt(formatString: "MMM YYYY")
              virtuals {
                subtitle
                readingTime
                previewImage {
                  imageId
                }
              }
              author {
                username
              }
            }
          }
        }
      }
    `}
    render={({ allMediumPost }) => {
      const posts = edgeToArray(allMediumPost).map(parsePost)
      return (
        <Section.Container id="writing">
          <Section.Header name="Writing" label="writing" />
          <CardContainer minWidth="300px">
            {posts.map(p => (
              <Fade key={p.id} bottom>
                <Post {...p} />
              </Fade>
            ))}
          </CardContainer>
        </Section.Container>
      )
    }}
  />
)

export default Writing
