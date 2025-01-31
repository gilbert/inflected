// prettier-ignore
const DEFAULT_APPROXIMATIONS: Record<string, string> = {
  'À': 'A',   'Á': 'A',   'Â': 'A',   'Ã': 'A',   'Ä': 'A',   'Å': 'A',   'Æ': 'AE',
  'Ç': 'C',   'È': 'E',   'É': 'E',   'Ê': 'E',   'Ë': 'E',   'Ì': 'I',   'Í': 'I',
  'Î': 'I',   'Ï': 'I',   'Ð': 'D',   'Ñ': 'N',   'Ò': 'O',   'Ó': 'O',   'Ô': 'O',
  'Õ': 'O',   'Ö': 'O',   '×': 'x',   'Ø': 'O',   'Ù': 'U',   'Ú': 'U',   'Û': 'U',
  'Ü': 'U',   'Ý': 'Y',   'Þ': 'Th',  'ß': 'ss',  'à': 'a',   'á': 'a',   'â': 'a',
  'ã': 'a',   'ä': 'a',   'å': 'a',   'æ': 'ae',  'ç': 'c',   'è': 'e',   'é': 'e',
  'ê': 'e',   'ë': 'e',   'ì': 'i',   'í': 'i',   'î': 'i',   'ï': 'i',   'ð': 'd',
  'ñ': 'n',   'ò': 'o',   'ó': 'o',   'ô': 'o',   'õ': 'o',   'ö': 'o',   'ø': 'o',
  'ù': 'u',   'ú': 'u',   'û': 'u',   'ü': 'u',   'ý': 'y',   'þ': 'th',  'ÿ': 'y',
  'Ā': 'A',   'ā': 'a',   'Ă': 'A',   'ă': 'a',   'Ą': 'A',   'ą': 'a',   'Ć': 'C',
  'ć': 'c',   'Ĉ': 'C',   'ĉ': 'c',   'Ċ': 'C',   'ċ': 'c',   'Č': 'C',   'č': 'c',
  'Ď': 'D',   'ď': 'd',   'Đ': 'D',   'đ': 'd',   'Ē': 'E',   'ē': 'e',   'Ĕ': 'E',
  'ĕ': 'e',   'Ė': 'E',   'ė': 'e',   'Ę': 'E',   'ę': 'e',   'Ě': 'E',   'ě': 'e',
  'Ĝ': 'G',   'ĝ': 'g',   'Ğ': 'G',   'ğ': 'g',   'Ġ': 'G',   'ġ': 'g',   'Ģ': 'G',
  'ģ': 'g',   'Ĥ': 'H',   'ĥ': 'h',   'Ħ': 'H',   'ħ': 'h',   'Ĩ': 'I',   'ĩ': 'i',
  'Ī': 'I',   'ī': 'i',   'Ĭ': 'I',   'ĭ': 'i',   'Į': 'I',   'į': 'i',   'İ': 'I',
  'ı': 'i',   'Ĳ': 'IJ',  'ĳ': 'ij',  'Ĵ': 'J',   'ĵ': 'j',   'Ķ': 'K',   'ķ': 'k',
  'ĸ': 'k',   'Ĺ': 'L',   'ĺ': 'l',   'Ļ': 'L',   'ļ': 'l',   'Ľ': 'L',   'ľ': 'l',
  'Ŀ': 'L',   'ŀ': 'l',   'Ł': 'L',   'ł': 'l',   'Ń': 'N',   'ń': 'n',   'Ņ': 'N',
  'ņ': 'n',   'Ň': 'N',   'ň': 'n',   'ŉ': '\'n', 'Ŋ': 'NG',  'ŋ': 'ng',
  'Ō': 'O',   'ō': 'o',   'Ŏ': 'O',   'ŏ': 'o',   'Ő': 'O',   'ő': 'o',   'Œ': 'OE',
  'œ': 'oe',  'Ŕ': 'R',   'ŕ': 'r',   'Ŗ': 'R',   'ŗ': 'r',   'Ř': 'R',   'ř': 'r',
  'Ś': 'S',   'ś': 's',   'Ŝ': 'S',   'ŝ': 's',   'Ş': 'S',   'ş': 's',   'Š': 'S',
  'š': 's',   'Ţ': 'T',   'ţ': 't',   'Ť': 'T',   'ť': 't',   'Ŧ': 'T',   'ŧ': 't',
  'Ũ': 'U',   'ũ': 'u',   'Ū': 'U',   'ū': 'u',   'Ŭ': 'U',   'ŭ': 'u',   'Ů': 'U',
  'ů': 'u',   'Ű': 'U',   'ű': 'u',   'Ų': 'U',   'ų': 'u',   'Ŵ': 'W',   'ŵ': 'w',
  'Ŷ': 'Y',   'ŷ': 'y',   'Ÿ': 'Y',   'Ź': 'Z',   'ź': 'z',   'Ż': 'Z',   'ż': 'z',
  'Ž': 'Z',   'ž': 'z',
  'А': 'A',   'Б': 'B',   'В': 'V',   'Г': 'G',   'Д': 'D',   'Е': 'E',   'Ё': 'E',
  'Ж': 'ZH',  'З': 'Z',   'И': 'I',   'Й': 'J',   'К': 'K',   'Л': 'L',   'М': 'M',
  'Н': 'N',   'О': 'O',   'П': 'P',   'Р': 'R',   'С': 'S',   'Т': 'T',   'У': 'U',
  'Ф': 'F',   'Х': 'KH',  'Ц': 'C',   'Ч': 'CH',  'Ш': 'SH',  'Щ': 'SHCH',
  'Ъ': '',    'Ы': 'Y',   'Ь': '',    'Э': 'E',   'Ю': 'YU',  'Я': 'YA',
  'а': 'a',   'б': 'b',   'в': 'v',   'г': 'g',   'д': 'd',   'е': 'e',   'ё': 'e',
  'ж': 'zh',  'з': 'z',   'и': 'i',   'й': 'j',   'к': 'k',   'л': 'l',   'м': 'm',
  'н': 'n',   'о': 'o',   'п': 'p',   'р': 'r',   'с': 's',   'т': 't',   'у': 'u',
  'ф': 'f',   'х': 'kh',  'ц': 'c',   'ч': 'ch',  'ш': 'sh',  'щ': 'shch',
  'ъ': '',    'ы': 'y',   'ь': '',    'э': 'e',   'ю': 'yu',  'я': 'ya'
};

const DEFAULT_REPLACEMENT_CHAR = "?";

const instances: Record<string, Transliterator> = {};

export default class Transliterator {
  static getInstance(locale: string) {
    instances[locale] = instances[locale] || new Transliterator();
    return instances[locale];
  }

  approximations: Record<string, string> = {};
  constructor() {
    for (const char in DEFAULT_APPROXIMATIONS) {
      this.approximate(char, DEFAULT_APPROXIMATIONS[char]);
    }
  }

  approximate(char: string, replacement: string) {
    this.approximations[char] = replacement;
  }

  transliterate(string: string, replacement: string) {
    return string.replace(
      /[^\u0000-\u007f]/g,
      c => this.approximations[c] || replacement || DEFAULT_REPLACEMENT_CHAR
    );
  }
}
