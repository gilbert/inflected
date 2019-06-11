import isFunction from "./util/isFunction";
import Inflector from "./Inflector";
import defaults from "./defaults";

type Fn = (inflector: Inflector) => void

export default function inflections(): Inflector;
export default function inflections(fn: Fn): void;
export default function inflections(locale: string): Inflector;
export default function inflections(locale: string, fn: Fn): void;
export default function inflections(locale?: string | Fn, fn?: Fn): void | Inflector {
  if (isFunction(locale)) {
    fn = locale as Fn;
    locale = null as any;
  }

  locale = (locale || "en") as string;

  if (fn) {
    fn(Inflector.getInstance(locale));
  } else {
    return Inflector.getInstance(locale);
  }
}

for (let locale in defaults) {
  inflections(locale, defaults[locale]);
}
