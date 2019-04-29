import React from 'react'
import styled from 'styled-components'

const SvgComponent = props => (
  <StyledLogo viewBox="0 0 201 49" {...props}>
    <text
      className="logotext"
      transform="translate(16.016 33.031)"
      fontSize={32}
      fontFamily="Quicksand-Regular"
      fill="#FFF"
    >
      {'stevenmarc'}
    </text>
    <path
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M108 14V1H1v47h107V36"
    />
  </StyledLogo>
)

const StyledLogo = styled.svg`
  width: 50%;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 800px) {
    width: 40%;
  }
  @media (max-width: 440px) {
    width: 30%;
  }
`

export default SvgComponent
