import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import { Flex, Image } from 'rebass'
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
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
`

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 10px 10px;
  font-family: Quicksand, sans-serif;
  font-weight: 300;
  font-size: 20px;
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
        <Menu>
          <MenuItem section="landing">HOME</MenuItem>
          <MenuItem section="about">ABOUT</MenuItem>
          <MenuItem section="projects">PROJECTS</MenuItem>
          <MenuItem section="writing">WRITING</MenuItem>
          <MenuItem section="contact">CONTACT</MenuItem>
        </Menu>
      </Flex>
    </Fade>
  </HeaderContainer>
)

export default Header
