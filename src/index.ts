import plugin from 'tailwindcss/plugin'

const focusUnder = (n: string, adding = 1) => ({
  'margin-bottom': `${adding}px`,
  'border-bottom-width': `${n}px`,
  outline: '0px',
  '&:focus': {
    'margin-bottom': '0',
    'border-bottom-width': `${parseInt(n) + adding}px`
  }
})

const reactions = plugin(
  ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
      '.push-effect': {
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          'border-radius': 'inherit'
        },
        '&:hover:before': {
          background: 'rgba(0,0,0,0.1)'
        },
        '&:active:before': {
          background: 'rgba(0,0,0,0.2)'
        }
      },
      '.pop-effect': {
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          'border-radius': 'inherit'
        },
        '&:hover:before': {
          background: 'rgba(255,255,255,0.1)'
        },
        '&:active:before': {
          background: 'rgba(255,255,255,0.2)'
        }
      },
      '.focus-under': focusUnder('1'),
      '.focus-under-bold': focusUnder('1', 2)
    })

    matchUtilities(
      {
        'focus-under': (n) => focusUnder(n),
        'focus-under-bold': (n) => focusUnder(n, 2)
      },
      { values: theme('focusUnderWidth') }
    )
  },
  {
    theme: {
      focusUnderWidth: {
        2: '2',
        3: '3',
        4: '4'
      }
    }
  }
)

export = reactions
