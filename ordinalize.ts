import ordinal from "./ordinal";

export default function ordinalize(number: number) {
  return `${number}${ordinal(number)}`;
}
