import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Wrap = styled.header`
  width: 100%;
  height: 68px;
  background: white;
  transition: all 0.3s ease-in-out;
  opacity: ${props => (props.isVisible ? '1' : '0')};
`

const Header = ({ style, isVisible }) => (
  <Wrap style={style} isVisible={isVisible}>
    <Flex justifyContent="center" flexWrap="wrap">
      <Box width={['540px', '720px', '960px', '1140px']}>
        <Flex flexWrap="wrap">
          <Box width={1 / 3}>{/* <Logo /> */}</Box>
          <Box width={1 / 3} />
          <Box width={1 / 3}>
            <Navigation />
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Wrap>
)

export default Header

const NavigationWrap = styled.nav`
  background: white;
  > ul {
    > li {
      display: inline-block;
      padding: 1em 0;
      margin-right: 1em;
    }
  }
`

const Navigation = () => (
  <NavigationWrap>
    <ul>
      <li>Program</li>
      <li>Artist</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </NavigationWrap>
)
