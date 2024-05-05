type Mods = Record<string, boolean | string>;

export function classNames(csl: string, mods?: Mods, additional?: string[]): string {
  return [
    csl,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value === true))
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}
