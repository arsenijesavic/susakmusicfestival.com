import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const Artists = () => (
  <Flex flexWrap="wrap">
    <Box width={1}>
      <h1 style={{ padding: '1em 0 ' }}>Artist</h1>
    </Box>
    <Box width={1 / 3}>
      <Artist name="Minka Popović" role="piano" image="minka-popovic.jpg" />
      <Artist name="Teodor Ganev" image="teodor-ganev.jpg" />
      <Artist name="Furiant Kvartet" image="furiant.jpg" />
    </Box>
    <Box width={1 / 3}>
      <Artist name="Nino Atanasković" image="nino-atanaskovic.jpg" />
      <Artist name="Neno Atanasković" image="neno-atanaskovic.jpg" />
      <Artist name="Dario Golčić" image="dario-golcic.jpg" />
    </Box>
    <Box width={1 / 3}>
      <Artist name="Rea Cela" image="rea-cela.jpg" />
      <Artist name="Tomaž Močilnik" image="tomaz-mocilnik.jpg" />
      <Artist name="Marko Župan" image="marko-zupan.jpg" />
    </Box>
  </Flex>
)

export default Artists

const ArtistWrap = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  cursor: pointer;

  > div {
    display: none;
  }

  &:hover {
    > div {
      display: block;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 30%;
  }
`
const ArtistOverflow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 1em;
  > h3 {
    margin: 0;
  }
`
const Artist = ({ name, role, image }) => (
  <ArtistWrap>
    <ArtistOverflow>
      <h3>{name}</h3>
      <p>{role}</p>
    </ArtistOverflow>
    <img src={`static/images/${image}`} alt="" />
  </ArtistWrap>
)
