export type Mods = Record<string, string | number | boolean | undefined>;
type Additional = (string | undefined)[];

export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
   return [
      cls,
      ...Object.entries(mods)
         .filter(([_, value]) => Boolean(value))
         .map(([className, _]) => className),
      ...additional.filter(Boolean),
   ].join(' ');
}

// classNames(cls.Button, { [cls.square]: square, [cls.center]: center, [className, cls[variant])
