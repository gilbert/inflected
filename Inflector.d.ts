declare type Rule = string | RegExp;
declare type Replacement = string;
export declare type Rules = Array<[Rule, Replacement]>;
export default class Inflector {
    static getInstance(locale: string): Inflector;
    plurals: Rules;
    singulars: Rules;
    uncountables: string[];
    humans: Rules;
    acronyms: Record<string, string>;
    acronymRegex: RegExp;
    acronym(word: string): void;
    plural(rule: string | RegExp, replacement: Replacement): void;
    singular(rule: Rule, replacement: Replacement): void;
    irregular(singular: string, plural: string): void;
    uncountable(...words: string[]): void;
    human(rule: Rule, replacement: Replacement): void;
    clear(scope?: 'all' | 'plurals' | 'singulars' | 'uncountables' | 'humans'): void;
}
export {};
