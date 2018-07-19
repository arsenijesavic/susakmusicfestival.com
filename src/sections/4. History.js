import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const History = () => (
  <Flex justifyContent="center" flexWrap="wrap">
    <Box width={1}>
      <h1 style={{ padding: '1rem' }}>About</h1>
    </Box>

    <Box width={1 / 2} style={{ padding: '1rem' }}>
      <p>
        The Susak Festival started on this tiny, magical island 11 years ago as
        a spontaneous idea among a few friends and colleagues who enjoy
        performing music together. This unique Adriatic island, refreshed by the
        gentle summer night’s breeze, welcomes a friendly audience of music
        lovers – young and old – from far and wide for musical performances of
        international quality in July/August every year. We also run creative
        Workshops in Music and Dance for young people– with topics suggested by
        the participants themselves. We have kept our range of activities going
        over the years – but with minimal financial support.
      </p>

      <p style={{ margin: '2em 0' }}>
        Each year we present different types of ensembles such as string quartet
        or wind quintet, but also some rare or cross-over settings; playing
        music from Bach to Bolling, but also giving space to contemporary
        composers of today. We aim to continue bringing world-class artists to
        Susak Island, and to create a colourful repertoire attractive to
        everybody. To make our concerts and work-shops economically accessible
        to a wide range of listeners, especially the young, we don’t charge for
        tickets – all concerts and work-shops are completely free. The goal of
        the Festival is to present chamber music in this more grassroots way,
        reach in go out to people who may, perhaps, not be tuned in to the
        classical music world. And for the local community it’s marvellous to
        have great music performances available on their doorstep.
      </p>
    </Box>

    <Box width={1 / 2}>
      <Gallery flexWrap="wrap" alignItems="stretch">
        <GalleryImage url="/static/images/IMG_1396.jpg" />
        <GalleryImage url="/static/images/DSC_0768.jpg" />
        <GalleryImage url="/static/images/DSC_0745.jpg" />

        <GalleryImage url="/static/images/730.jpg" />
        <GalleryImage url="/static/images/2014 susak FESTIVAL1_25.jpg" />
        <GalleryImage url="/static/images/DSC03843.jpg" />

        <GalleryImage url="/static/images/DSC03838.jpg" />
        <GalleryImage url="/static/images/DSC03835.jpg" />
        <GalleryImage url="/static/images/DSC03799.jpg" />

        <GalleryImage url="/static/images/DSC03789.jpg" />
        <GalleryImage url="/static/images/DSC03765.jpg" />
        <GalleryImage url="/static/images/DSC03789.jpg" />
      </Gallery>
    </Box>
  </Flex>
)

export default History

const Gallery = Flex.extend`
  position: relative;
`
const GIInner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(255, 255, 255);
`
const GIWrap = Box.extend`
  cursor: pointer;
  > div {
    opacity: ${props => (props.showGallery ? '1' : '0')};
  }
`

const GalleryImage = class extends React.Component {
  state = { isOpen: false }

  render() {
    const { url } = this.props
    const { isOpen } = this.state
    console.log(isOpen)

    return (
      <GIWrap
        showGallery={isOpen}
        width={0.33}
        onClick={() =>
          this.setState(prevState => ({ isOpen: !prevState.isOpen }))
        }
      >
        <GIInner>
          <p>TEST</p>
        </GIInner>
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          src={url}
          alt=""
        />
      </GIWrap>
    )
  }
}
