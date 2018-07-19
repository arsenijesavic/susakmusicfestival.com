import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { Logo } from '../components'

const FlexCustom = Flex.extend`
  width: 100%;
  height: 100%;
`
const LogoWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  color: white !important;
`

const Hero = () => (
  <FlexCustom alignItems="center" justifyContent="center" flexWrap="wrap">
    <Box width={1}>
      <LogoWrap>
        <Logo />
      </LogoWrap>
    </Box>
    <Box width={1}>
      <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.0)' }}>
        <h1 style={{ marginTop: '0', fontSize: '5.063em' }}>
          Susak Music Festival
        </h1>
        <p style={{ fontSize: '2.07474rem' }}>27. Jul 2018 - 30. Jul 2018</p>
        <p style={{ fontSize: '2.07474rem' }}>Susak, Hrvatska</p>
      </div>
    </Box>

    <Box width={1 / 2} mt={4} mb={6} p={4}>
      <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.0)' }}>
        <p style={{ fontSize: '1rem' }}>
          Susak Music Festival is a classical music event that takes place each
          year in Croatian the beautiful, small island of Susak in the north
          Adriatic sea. The Festival attracts some of the most respected
          classical musicians and dancers from around the world – and this
          summer we will be celebrating our 12thFestival!
        </p>
      </div>
    </Box>
  </FlexCustom>
)

export default Hero
