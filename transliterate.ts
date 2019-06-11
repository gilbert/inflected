import transliterations from "./transliterations";

type Options = {
  locale?: string
  replacement?: string
}
export default function transliterate(string: string, options: Options = {}) {
  const locale = options.locale || "en";
  const replacement = options.replacement || "?";

  return transliterations(locale).transliterate(string, replacement);
}
