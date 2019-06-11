export default class Transliterator {
    static getInstance(locale: string): Transliterator;
    approximations: Record<string, string>;
    constructor();
    approximate(char: string, replacement: string): void;
    transliterate(string: string, replacement: string): string;
}
