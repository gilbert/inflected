import applyInflections from "./applyInflections";
import inflections from "./inflections";

export default function singularize(word: string, locale = "en") {
  return applyInflections(word, inflections(locale).singulars);
}
