import React from 'react'
import Section from '../components/Section'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { Heading, Text, Card } from 'rebass'

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
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`

const Post = ({ title, text, image, url, date, time }) => (
  <Card
    width={[1, 1 / 2, 1 / 2]}
    onClick={() => window.open(url, '_blank')}
    pb={4}
    m="20px"
  >
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <div bg="primaryLight" color="white" x="right" y="bottom">
      {`${date} - ${Math.ceil(time)} min`}
    </div>
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
          <Card minWidth="300px">
            {posts.map(p => (
              <Fade bottom>
                <Post key={p.id} {...p} />
              </Fade>
            ))}
          </Card>
        </Section.Container>
      )
    }}
  />
)

export default Writing
