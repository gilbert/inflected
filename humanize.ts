import inflections from "./inflections";

type Options = {
  capitalize?: boolean
}
export default function humanize(lowerCaseAndUnderscoredWord: string, options?: Options) {
  let result = "" + lowerCaseAndUnderscoredWord;
  const humans = inflections().humans;
  let human, rule, replacement;

  options = options || {};

  if (options.capitalize === null || options.capitalize === undefined) {
    options.capitalize = true;
  }

  for (var i = 0, ii = humans.length; i < ii; i++) {
    human = humans[i];
    rule = human[0];
    replacement = human[1];

    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    // CHANGED
    if (typeof rule === 'string' ? result.indexOf(rule) > -1 : rule.test(result)) {
      result = result.replace(rule, replacement);
      break;
    }
  }

  result = result.replace(/_id$/, "");
  result = result.replace(/_/g, " ");

  result = result.replace(/([a-z\d]*)/gi, function(match) {
    return inflections().acronyms[match] || match.toLowerCase();
  });

  if (options.capitalize) {
    result = result.replace(/^\w/, function(match) {
      return match.toUpperCase();
    });
  }

  return result;
}
