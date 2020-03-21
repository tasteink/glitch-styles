const GLITCH_LEFT = 'var(--glitch-styles-left-width)'
const GLITCH_RIGHT = 'var(--glitch-styles-right-width)'
const COLOR0 = 'var(--glitch-styles-color-0)'
const COLOR1 = 'var(--glitch-styles-color-1)'

const glitchStyles = {
  boxShadow: `${GLITCH_LEFT} -1px 0px ${COLOR0}, ${GLITCH_RIGHT} 1px 0px ${COLOR1}`,
  textShadow: `${GLITCH_LEFT} -1px 0px ${COLOR0}, ${GLITCH_RIGHT} 1px 0px ${COLOR1}`,
}

const getCssVariableValue = (element) => (variableName) => {
  return global.getComputedStyle(element).getPropertyValue(variableName)
}

export const getGlitchStyles = (element) => {
  const getCssValue = getCssVariableValue(element)

  const GLITCH_LEFT = getCssValue('--glitch-styles-left-width')
  const GLITCH_RIGHT = getCssValue('--glitch-styles-right-width')
  const COLOR0 = getCssValue('--glitch-styles-color-0')
  const COLOR1 = getCssValue('--glitch-styles-color-1')

  return {
    GLITCH_LEFT,
    GLITCH_RIGHT,
    COLOR0,
    COLOR1,
  }
}

export default glitchStyles
