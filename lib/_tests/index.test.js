import "@testing-library/jest-dom";

import * as React from "react";
import { render } from "@testing-library/react";
import glitchStyles, { getGlitchStyles } from "../index.js";
import { mockGetComputedStyles } from "./_helpers";

test("exports are correct", () => {
  expect(typeof glitchStyles).toBe("object");
  expect(typeof glitchStyles.boxShadow).toBe("string");
  expect(typeof glitchStyles.textShadow).toBe("string");
  expect(typeof getGlitchStyles).toBe("function");
});

// TODO: Figure out how to test this without having to mock getComputedStyles.
// Mocking this window method leads to potential inconsistencies
// tests that falsely pass.

test("getGlitchStyles to get contextual css variable values", () => {
  const styles = {
    root: {
      "--glitch-vertical-offset-left": "-1px",
      "--glitch-vertical-offset-right": "1px",
      "--glitch-left-width": "1px",
      "--glitch-right-width": "1px",
      "--glitch-color-0": "#fff",
      "--glitch-color-1": "#000",
      "--glitch-blur": "0px",
    },

    innerContext: {
      "--glitch-vertical-offset-left": "-2px",
      "--glitch-vertical-offset-right": "2px",
      "--glitch-left-width": "2px",
      "--glitch-right-width": "2px",
      "--glitch-color-0": "#f8f",
      "--glitch-color-1": "#333",
      "--glitch-blur": "1px",
    },
  };

  mockGetComputedStyles(styles);

  const { getByTestId } = render(
    <div>
      <div>
        <div data-testid="root" style={styles.root}>
          <div data-testid="innerContext" style={styles.innerContext}>
            <p data-testid="textTarget">text</p>
            <button data-testid="boxTarget">button</button>
          </div>
        </div>
      </div>
    </div>,
  );

  const root = getByTestId("root");
  const innerContext = getByTestId("innerContext");
  const textTarget = getByTestId("textTarget");
  const boxTarget = getByTestId("boxTarget");

  const expectedRootStyles = {
    GLITCH_VERTICAL_OFFSET_LEFT: "-1px",
    GLITCH_VERTICAL_OFFSET_RIGHT: "1px",
    GLITCH_LEFT: "1px",
    GLITCH_RIGHT: "1px",
    GLITCH_COLOR0: "#fff",
    GLITCH_COLOR1: "#000",
    GLITCH_BLUR: "0px",
  };

  const expectedInnerContextStyles = {
    GLITCH_VERTICAL_OFFSET_LEFT: "-2px",
    GLITCH_VERTICAL_OFFSET_RIGHT: "2px",
    GLITCH_LEFT: "2px",
    GLITCH_RIGHT: "2px",
    GLITCH_COLOR0: "#f8f",
    GLITCH_COLOR1: "#333",
    GLITCH_BLUR: "1px",
  };

  const expectedTextTargetStyles = {
    GLITCH_VERTICAL_OFFSET_LEFT: "-2px",
    GLITCH_VERTICAL_OFFSET_RIGHT: "2px",
    GLITCH_LEFT: "2px",
    GLITCH_RIGHT: "2px",
    GLITCH_COLOR0: "#f8f",
    GLITCH_COLOR1: "#333",
    GLITCH_BLUR: "1px",
  };

  const expectedBoxTargetStyles = {
    GLITCH_VERTICAL_OFFSET_LEFT: "-2px",
    GLITCH_VERTICAL_OFFSET_RIGHT: "2px",
    GLITCH_LEFT: "2px",
    GLITCH_RIGHT: "2px",
    GLITCH_COLOR0: "#f8f",
    GLITCH_COLOR1: "#333",
    GLITCH_BLUR: "1px",
  };

  expect(getGlitchStyles(root)).toEqual(expectedRootStyles);
  expect(getGlitchStyles(innerContext)).toEqual(expectedInnerContextStyles);
  expect(getGlitchStyles(textTarget)).toEqual(expectedTextTargetStyles);
  expect(getGlitchStyles(boxTarget)).toEqual(expectedBoxTargetStyles);
});
