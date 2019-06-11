import Inflector from "./Inflector";
declare type Fn = (inflector: Inflector) => void;
export default function inflections(): Inflector;
export default function inflections(fn: Fn): void;
export default function inflections(locale: string): Inflector;
export default function inflections(locale: string, fn: Fn): void;
export {};
