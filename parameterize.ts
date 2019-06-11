import transliterate from "./transliterate";

type Options = {
  separator?: string
  locale?: string
  replacement?: string
}
export default function parameterize(string: string, options: Options = {}) {
  if (options.separator === undefined) {
    options.separator = "-";
  }

  if (options.separator === null) {
    options.separator = "";
  }

  // replace accented chars with their ascii equivalents
  let result = transliterate(string, options);

  result = result.replace(/[^a-z0-9\-_]+/ig, options.separator);

  if (options.separator.length) {
    const separatorRegex = new RegExp(options.separator);

    // no more than one of the separator in a row
    result = result.replace(
      new RegExp(separatorRegex.source + "{2,}"),
      options.separator
    );

    // remove leading/trailing separator
    result = result.replace(
      new RegExp(
        "^" + separatorRegex.source + "|" + separatorRegex.source + "$",
        "i"
      ),
      ""
    );
  }

  return result.toLowerCase();
}
