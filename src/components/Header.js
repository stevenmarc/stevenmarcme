import React, { Fragment } from 'react'
import Headroom from 'react-headroom'
import { Flex, Image } from 'rebass'
import styled from 'styled-components'
import { SectionLinks } from 'react-scroll-section'
import Fade from 'react-reveal/Fade'

const Header = () => {
  return (
    <Headroom>
      <Fade top>
        <Flex
          flexwrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <SectionLinks />
        </Flex>
      </Fade>
    </Headroom>
  )
}

export default Header
