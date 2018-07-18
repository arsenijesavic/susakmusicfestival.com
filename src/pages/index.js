import React from 'react'
import { Flex, Box } from 'grid-styled'
import Layout from '../layout'
import { Hero, Program, Artists } from '../sections'

const IndexPage = () => (
  <Layout>
    <Flex justifyContent="center" flexWrap="wrap">
      <Box width={['540px', '720px', '960px', '1140px']}>
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box width={1} mx={4} mt={2}>
            <Hero />
          </Box>
          <Box width={1} mx={4} mt={2}>
            <Program />
          </Box>
          <Box width={1} mx={4} mt={6}>
            <Artists />
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
