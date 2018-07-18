import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Program = () => (
  <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
    <Box width={1}>
      <h1 style={{ padding: '1rem' }}>Program</h1>
    </Box>
    <Box width={1 / 3}>
      <Day name="Summer Spirit" program={day1} />
    </Box>
    <Box width={1 / 3}>
      <Day name="All the Baroque" program={day2} />
    </Box>
    <Box width={1 / 3}>
      <Day name="Far Away" program={day3} />
    </Box>
  </Flex>
)

export default Program

const DayWrap = styled.div`
  width: 100%;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  padding: 1rem;
  > ul {
    > li {
      margin: 1.5em 0;
      > h4 {
        margin: 0;
      }
    }
  }
`

const Day = ({ name, program, image }) => (
  <DayWrap>
    <h2>{name}</h2>
    <ul>
      {program &&
        program.map((v, i) => (
          <li>
            <h4>{v.composer}</h4>
            <p>{v.composition}</p>
            <p style={{ fontWeight: '100', fontSize: '0.75em' }}>{v.details}</p>
          </li>
        ))}
    </ul>
  </DayWrap>
)

const day1 = [
  {
    composer: 'Claude Bolling',
    composition: 'Jazz Suite',
    details: 'for flute and jazz piano trio',
  },
  {
    composer: 'J.S.Bach',
    composition: 'Trio Sonata u C Duru BWV 529',
    details: 'for guitar and accordion',
  },
  {
    composer: 'Joaquin Rodrigo',
    composition: 'Concierto de‘Aranjuez, Adagio',
    details: 'for guitar and accordion',
  },
  {
    composer: 'Claude Bolling',
    composition: 'Picnic Suite ',
    details: 'for flute, guitar & jazz piano trio',
  },
]

const day2 = [
  {
    composer: 'J.S.Bach',
    composition: 'Air iz orkestarske svite br. 3',
    details: 'for string quintet',
  },
  {
    composer: 'Purcell',
    composition: 'When I am laid in earth',
    details: 'soprano, string quintet and basso continuo',
  },
  {
    composer: 'J. Rodrigo',
    composition: 'TConcerto d‘Arajuez, Adagio',
    details: 'for guitar and accordeon',
  },
  {
    composer: 'Claude Bolling',
    composition: 'Picnic suite',
    details: 'for flute, guitar and jazz piano trio',
  },
]

const day3 = [
  {
    composer: 'Claude Bolling',
    composition: 'Jazz Suite',
    details: 'for flute and jazz piano trio',
  },
  {
    composer: 'J.S.Bach',
    composition: 'Trio Sonata u C Duru BWV 529',
    details: 'for guitar and accordeon',
  },
  {
    composer: 'J. Rodrigo',
    composition: 'TConcerto d‘Arajuez, Adagio',
    details: 'for guitar and accordeon',
  },
  {
    composer: 'Claude Bolling',
    composition: 'Picnic suite',
    details: 'for flute, guitar and jazz piano trio',
  },
]
