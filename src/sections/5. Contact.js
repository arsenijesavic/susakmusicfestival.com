import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Contact = () => (
  <Flex justifyContent="center" flexWrap="wrap">
    <Box width={1}>
      <h1 style={{ padding: '1rem' }}>Contact</h1>
    </Box>

    <Box width={1 / 2} style={{ padding: '1rem' }}>
      <p>email</p>
    </Box>
  </Flex>
)

export default Contact
