import isFunction from "./util/isFunction";
import Transliterator from "./Transliterator";

type Fn = (inflector: Transliterator) => void

export default function transliterations(): Transliterator;
export default function transliterations(fn: Fn): void;
export default function transliterations(locale: string): Transliterator;
export default function transliterations(locale: string, fn: Fn): void;
export default function transliterations(locale?: string | Fn, fn?: Fn): void | Transliterator {
  if (isFunction(locale)) {
    fn = locale as Fn;
    locale = null as any;
  }

  locale = (locale || "en") as string;

  if (fn) {
    fn(Transliterator.getInstance(locale));
  } else {
    return Transliterator.getInstance(locale);
  }
}
