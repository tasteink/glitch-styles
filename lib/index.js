const GLITCH_VERTICAL_OFFSET_LEFT = "var(--glitch-vertical-offset-left)";
const GLITCH_VERTICAL_OFFSET_RIGHT = "var(--glitch-vertical-offset-right)";
const GLITCH_LEFT = "var(--glitch-left-width)";
const GLITCH_RIGHT = "var(--glitch-right-width)";
const GLITCH_COLOR0 = "var(--glitch-color-0)";
const GLITCH_COLOR1 = "var(--glitch-color-1)";
const GLITCH_BLUR = "var(--glitch-blur)";

const glitchStyles = {
  boxShadow: `${GLITCH_LEFT} ${GLITCH_VERTICAL_OFFSET_LEFT} ${GLITCH_BLUR} ${GLITCH_COLOR0}, ${GLITCH_RIGHT} ${GLITCH_VERTICAL_OFFSET_RIGHT} ${GLITCH_BLUR} ${GLITCH_COLOR1}`,
  textShadow: `${GLITCH_LEFT} ${GLITCH_VERTICAL_OFFSET_LEFT} ${GLITCH_BLUR} ${GLITCH_COLOR0}, ${GLITCH_RIGHT} ${GLITCH_VERTICAL_OFFSET_RIGHT} ${GLITCH_BLUR} ${GLITCH_COLOR1}`,
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

  const GLITCH_LEFT = getCssValue("--glitch-left-width");
  const GLITCH_RIGHT = getCssValue("--glitch-right-width");
  const GLITCH_COLOR0 = getCssValue("--glitch-color-0");
  const GLITCH_COLOR1 = getCssValue("--glitch-color-1");
  const GLITCH_BLUR = getCssValue("--glitch-blur");

  return {
    GLITCH_VERTICAL_OFFSET_LEFT,
    GLITCH_VERTICAL_OFFSET_RIGHT,
    GLITCH_LEFT,
    GLITCH_RIGHT,
    GLITCH_COLOR0,
    GLITCH_COLOR1,
    GLITCH_BLUR,
  };
};

export default glitchStyles;
