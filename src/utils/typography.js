import Typography from 'typography'

const typography = new Typography({
  title: 'Susak',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Playfair Display',
      styles: ['700'],
    },
    {
      name: 'Alice',
      styles: ['400'],
    },
  ],
  scaleRatio: 3.375,
  headerFontFamily: ['Playfair Display', 'serif'],
  bodyFontFamily: ['Alice', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 800,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      fontSize: '16px',
    },
    'h1, h2, h3, h4': {
      margin: '1.414em 0 0.5em',
      fontWeight: 'inherit',
      lineHeight: '1.2',
      color: '#13022C',
      fontWeight: ' 700',
    },

    ul: {
      listStyle: 'none',
      margin: '0',
      padding: '0',
    },

    li: {
      margin: '0',
      padding: '0',
    },

    'li > p': {
      margin: '0',
      padding: '0',
    },

    p: {
      margin: '0',
      padding: '0',
    },
  }),
})

export default typography
