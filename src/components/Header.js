import React from 'react'
import { Link } from 'gatsby'
import StevenmarcSvg from './StevenmarcSvg'
import Headroom from 'react-headroom'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { SectionLink } from 'react-scroll-section'
import Fade from 'react-reveal/Fade'

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primary_dark};
  }
  position: absolute;
  width: 100%;
`

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  right: 2%;
  display: table;
  margin: 0;
  min-width: 280px;
  margin-block-end: 0em;
`

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  padding: 10%, 0, 0, 0;
  margin-right: 2%;
  font-family: Quicksand, sans-serif;
  font-weight: 300;
  font-size: 0.8em;
  user-select: none;
  color: ${props =>
    props.selected ? props.theme.colors.primary_dark : 'white'};
  border-top: 5px solid
    ${props =>
      props.selected ? props.theme.colors.primary_dark : 'transparent'};
`

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
)

const Header = () => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Box>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <StevenmarcSvg
              style={{
                display: `inline`,
                width: 100,
                padding: 0,
              }}
            />
          </Link>
        </Box>
        <Box>
          <Menu>
            <MenuItem section="about">ABOUT</MenuItem>
            <MenuItem section="projects">PROJECTS</MenuItem>
            <MenuItem section="writing">WRITING</MenuItem>
            <MenuItem section="contact">CONTACT</MenuItem>
          </Menu>
        </Box>
      </Flex>
    </Fade>
  </HeaderContainer>
)

export default Header
