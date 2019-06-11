const toString = Object.prototype.toString;

export default function isFunc(obj: unknown) {
  return toString.call(obj) === "[object Function]";
}
