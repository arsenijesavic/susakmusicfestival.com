import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const FlexCustom = Flex.extend``

const Artists = () => (
  <FlexCustom flexWrap="wrap">
    <Box width={1}>
      <h1 style={{ padding: '1em 0 ' }}>Artist</h1>
    </Box>
    <Box width={1 / 3}>
      <Artist
        name="Minka Popović"
        instrument="piano"
        image="minka-popovic.jpg"
      />
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
  </FlexCustom>
)

export default Artists

const ArtistWrap = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  > div {
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    height: 50vh;
    > div {
      opacity: 1;
    }
    > img {
      filter: grayscale(1);
      object-position: 50% 50%;
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0% 30%;
    transition: all 0.1s ease-in-out;
  }
`
const ArtistOverflow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  padding: 1em;
  > h3 {
    margin: 0;
  }
`
const Artist = ({ name, instrument, image }) => (
  <ArtistWrap>
    <ArtistOverflow>
      <h3>{name}</h3>
      <p>{instrument}</p>
    </ArtistOverflow>
    <img src={`static/images/${image}`} alt="" />
  </ArtistWrap>
)
