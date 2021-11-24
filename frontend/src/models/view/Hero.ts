interface Passive {
  amount: number;
  text: string;
}

interface Hero {
  name: string;
  klass: number;
  damage: number;
  health: number;
  mana: number;
  passive: Passive;
  active: string;
}

export type {Hero};