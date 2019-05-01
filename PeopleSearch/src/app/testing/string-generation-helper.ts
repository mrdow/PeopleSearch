export function generateString(length: number, letter = 'a') {
  const char = letter ? letter[0] : 'a';
  const generated = char.repeat(length);
  return generated;
}
