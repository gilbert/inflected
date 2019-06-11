import humanize from "./humanize";
import underscore from "./underscore";

export default function titleize(word: string) {
  return humanize(underscore(word)).replace(/(^|[\s¿/]+)([a-z])/g, function(
    match,
    _boundary,
    letter,
    _idx,
    _string
  ) {
    return match.replace(letter, letter.toUpperCase());
  });
}
