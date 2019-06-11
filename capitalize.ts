export default function capitalize(str: string) {
  const result = str === null || str === undefined ? "" : String(str);
  return result.charAt(0).toUpperCase() + result.slice(1);
}
