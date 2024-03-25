export function getKeyByValue(object: Object, value: string) {

  const indexOfS = Object.values(object).indexOf(value as unknown as object);

  return Object.keys(object)[indexOfS];
}

