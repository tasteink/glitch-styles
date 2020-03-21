export const mockGetComputedStyles = (styleLookup) => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: (element) => {
      const testId = element.getAttribute('data-testid')

      return {
        getPropertyValue(variableName) {
          // Look for the given element's specified css variables.
          // If they don't exist, get innerContext css variables.
          // Lastly, fall back to root css variables.
          const hasCssVariables = styleLookup[testId]
          const testIdToUse = hasCssVariables ? testId : 'innerContext'
          return styleLookup[testIdToUse][variableName] || styleLookup['root'][variableName]
        },
      }
    },
  })
}
