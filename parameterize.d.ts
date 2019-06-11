declare type Options = {
    separator?: string;
    locale?: string;
    replacement?: string;
};
export default function parameterize(string: string, options?: Options): string;
export {};
