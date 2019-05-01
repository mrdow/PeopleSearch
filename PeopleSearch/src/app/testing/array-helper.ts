export function stringifyArray(data: any[]) {
  return data.map(item => JSON.stringify(item));
}
