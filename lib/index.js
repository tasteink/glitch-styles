const GLITCH_VERTICAL_OFFSET_LEFT = "var(--glitch-vertical-offset-left)";
const GLITCH_VERTICAL_OFFSET_RIGHT = "var(--glitch-vertical-offset-right)";
const GLITCH_LEFT = "var(--glitch-left-width)";
const GLITCH_RIGHT = "var(--glitch-right-width)";
const COLOR0 = "var(--glitch-color-0)";
const COLOR1 = "var(--glitch-color-1)";

const glitchStyles = {
  boxShadow: `-${GLITCH_LEFT} -${GLITCH_VERTICAL_OFFSET} 0px ${COLOR0}, ${GLITCH_RIGHT} ${GLITCH_VERTICAL_OFFSET} 0px ${COLOR1}`,
  textShadow: `-${GLITCH_LEFT} -${GLITCH_VERTICAL_OFFSET} 0px ${COLOR0}, ${GLITCH_RIGHT} ${GLITCH_VERTICAL_OFFSET} 0px ${COLOR1}`,
};

const getCssVariableValue = (element) => (variableName) => {
  return global.getComputedStyle(element).getPropertyValue(variableName);
};

export const getGlitchStyles = (element) => {
  const getCssValue = getCssVariableValue(element);

  const GLITCH_VERTICAL_OFFSET_LEFT = getCssValue(
    "--glitch-vertical-offset-left",
  );
  const GLITCH_VERTICAL_OFFSET_RIGHT = getCssValue(
    "--glitch-vertical-offset-right",
  );
  const GLITCH_VERTICAL_OFFSET = getCssValue("--glitch-vertical-offset");
  const GLITCH_LEFT = getCssValue("--glitch-left-width");
  const GLITCH_RIGHT = getCssValue("--glitch-right-width");
  const COLOR0 = getCssValue("--glitch-color-0");
  const COLOR1 = getCssValue("--glitch-color-1");

  return {
    GLITCH_VERTICAL_OFFSET_LEFT,
    GLITCH_VERTICAL_OFFSET_RIGHT,
    GLITCH_LEFT,
    GLITCH_RIGHT,
    COLOR0,
    COLOR1,
  };
};

export default glitchStyles;
