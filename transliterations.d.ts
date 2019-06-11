import Transliterator from "./Transliterator";
declare type Fn = (inflector: Transliterator) => void;
export default function transliterations(): Transliterator;
export default function transliterations(fn: Fn): void;
export default function transliterations(locale: string): Transliterator;
export default function transliterations(locale: string, fn: Fn): void;
export {};
