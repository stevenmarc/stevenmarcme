import React from 'react'
import { Link } from 'gatsby'
import LogoSvg from './LogoSvg'
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
  position: absolute;
  z-index: 1;
  right: 5%;
  margin: 0;
  margin-block-start: -1em;
  font-size: 1em;
  min-width: 340px;
  @media (max-width: 480px) {
    margin-block-start: 0em;
    font-size: 0.8em;
    min-width: 280px;
    right: 1%;
  }
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
  user-select: none;
  color: ${props => (props.selected ? props.theme.colors.color4 : 'white')};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
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
      <Flex justifyContent="space-between" alignItems="center" p={3}>
        <Box>
          <Link to="/">
            <LogoSvg />
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
