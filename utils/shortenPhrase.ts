const cloneObject = (
  phrase: string,
  startSymbols: number = 10,
  endSymbols: number = 5,
): string => (phrase.length > startSymbols + endSymbols
  ? `${phrase.slice(0, startSymbols)}...${phrase.slice(phrase.length - endSymbols, phrase.length)}`
  : phrase);

export default cloneObject;
