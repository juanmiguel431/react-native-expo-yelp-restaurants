type ObjectValues<T> = T[keyof T];

export const SCREEN = {
  Home: 'Home',
  Search: 'Search',
  ResultsShow: 'ResultsShow',
} as const;
export type Screen = ObjectValues<typeof SCREEN>;
