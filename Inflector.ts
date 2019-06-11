function icPart(str: string) {
  return str
    .split("")
    .map(c => `(?:${c.toUpperCase()}|${c.toLowerCase()})`)
    .join("");
}

function remove<T>(arr: T[], elem: T) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === elem) {
      Array.prototype.splice.call(arr, i, 1);
    }
  }
}

function hasProp(obj: object, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

const instances: Record<string, Inflector> = {};

type Rule = string | RegExp
type Replacement = string
export type Rules = Array<[Rule, Replacement]>

export default class Inflector {
  static getInstance(locale: string) {
    instances[locale] = instances[locale] || new Inflector();
    return instances[locale];
  }

  plurals: Rules = [];
  singulars: Rules = [];
  uncountables: string[] = [];
  humans: Rules = [];
  acronyms: Record<string, string> = {};
  acronymRegex = /(?=a)b/;

  acronym(word: string) {
    this.acronyms[word.toLowerCase()] = word;

    const values = [];

    for (const key in this.acronyms) {
      if (hasProp(this.acronyms, key)) {
        values.push(this.acronyms[key]);
      }
    }

    this.acronymRegex = new RegExp(values.join("|"));
  }

  plural(rule: string | RegExp, replacement: Replacement) {
    if (typeof rule === "string") {
      remove(this.uncountables, rule);
    }

    remove(this.uncountables, replacement);
    this.plurals.unshift([rule, replacement]);
  }

  singular(rule: Rule, replacement: Replacement) {
    if (typeof rule === "string") {
      remove(this.uncountables, rule);
    }

    remove(this.uncountables, replacement);
    this.singulars.unshift([rule, replacement]);
  }

  irregular(singular: string, plural: string) {
    remove(this.uncountables, singular);
    remove(this.uncountables, plural);

    const s0 = singular[0];
    const sRest = singular.substr(1);

    const p0 = plural[0];
    const pRest = plural.substr(1);

    if (s0.toUpperCase() === p0.toUpperCase()) {
      this.plural(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + pRest);
      this.plural(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + pRest);

      this.singular(
        new RegExp("(" + s0 + ")" + sRest + "$", "i"),
        "$1" + sRest
      );
      this.singular(
        new RegExp("(" + p0 + ")" + pRest + "$", "i"),
        "$1" + sRest
      );
    } else {
      const sRestIC = icPart(sRest);
      const pRestIC = icPart(pRest);

      this.plural(
        new RegExp(s0.toUpperCase() + sRestIC + "$"),
        p0.toUpperCase() + pRest
      );
      this.plural(
        new RegExp(s0.toLowerCase() + sRestIC + "$"),
        p0.toLowerCase() + pRest
      );
      this.plural(
        new RegExp(p0.toUpperCase() + pRestIC + "$"),
        p0.toUpperCase() + pRest
      );
      this.plural(
        new RegExp(p0.toLowerCase() + pRestIC + "$"),
        p0.toLowerCase() + pRest
      );

      this.singular(
        new RegExp(s0.toUpperCase() + sRestIC + "$"),
        s0.toUpperCase() + sRest
      );
      this.singular(
        new RegExp(s0.toLowerCase() + sRestIC + "$"),
        s0.toLowerCase() + sRest
      );
      this.singular(
        new RegExp(p0.toUpperCase() + pRestIC + "$"),
        s0.toUpperCase() + sRest
      );
      this.singular(
        new RegExp(p0.toLowerCase() + pRestIC + "$"),
        s0.toLowerCase() + sRest
      );
    }
  }

  uncountable(...words: string[]) {
    this.uncountables = this.uncountables.concat(words);
  }

  human(rule: Rule, replacement: Replacement) {
    this.humans.unshift([rule, replacement]);
  }

  clear(scope: 'all' | 'plurals' | 'singulars' | 'uncountables' | 'humans' = "all") {
    if (scope === "all") {
      this.plurals = [];
      this.singulars = [];
      this.uncountables = [];
      this.humans = [];
    } else {
      this[scope] = [];
    }
  }
}
