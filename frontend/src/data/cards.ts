const neutralCards = [
  {
    id: 0,
    name: "Neutral card 1",
    type: "Minion",
    effect: "Neutral card 1 effect",
    stats: {damage: 1, health: 1}
  }, {
    id: 1,
    name: "Neutral card 2",
    type: "Minion",
    effect: "Neutral card 2 effect",
    stats: {damage: 2, health: 2}
  }, {
    id: 2,
    name: "Neutral card 3",
    type: "Minion",
    effect: "Neutral card 3 effect",
    stats: {damage: 3, health: 3}
  }, {
    id: 3,
    name: "Neutral card 4",
    type: "Minion",
    effect: "Neutral card 4 effect",
    stats: {damage: 4, health: 4}
  }, {
    id: 4,
    name: "Neutral card 5",
    type: "Minion",
    effect: "Neutral card 5 effect",
    stats: {damage: 5, health: 5}
  }, {
    id: 5,
    name: "Neutral card 6",
    type: "Minion",
    effect: "Neutral card 6 effect",
    stats: {damage: 6, health: 6}
  }, {
    id: 6,
    name: "Neutral card 7",
    type: "Magic",
    effect: "Neutral card 7 effect",
    stats: {}
  }, {
    id: 7,
    name: "Neutral card 8",
    type: "Magic",
    effect: "Neutral card 8 effect",
    stats: {}
  }, {
    id: 8,
    name: "Neutral card 9",
    type: "Magic",
    effect: "Neutral card 9 effect",
    stats: {}
  }, {
    id: 9,
    name: "Neutral card 10",
    type: "Trap",
    effect: "Neutral card 10 effect",
    stats: {}
  }, {
    id: 10,
    name: "Neutral card 11",
    type: "Trap",
    effect: "Neutral card 11 effect",
    stats: {}
  }, {
    id: 11,
    name: "Neutral card 12",
    type: "Trap",
    effect: "Neutral card 12 effect",
    stats: {}
  }
];

const solidCards = [
  {
    id: 50,
    name: "Solid card 1",
    type: "Minion",
    effect: "Solid card 1 effect",
    stats: {damage: 1, health: 1, damageReduction: 1}
  }, {
    id: 51,
    name: "Solid card 2",
    type: "Minion",
    effect: "Solid card 2 effect",
    stats: {damage: 2, health: 2, damageReduction: 2}
  }, {
    id: 52,
    name: "Solid card 3",
    type: "Minion",
    effect: "Solid card 3 effect",
    stats: {damage: 3, health: 3, damageReduction: 3}
  }, {
    id: 53,
    name: "Solid card 4",
    type: "Minion",
    effect: "Solid card 4 effect",
    stats: {damage: 4, health: 4, damageReduction: 4}
  }, {
    id: 54,
    name: "Solid card 5",
    type: "Minion",
    effect: "Solid card 5 effect",
    stats: {damage: 5, health: 5, damageReduction: 5}
  }, {
    id: 55,
    name: "Solid card 6",
    type: "Minion",
    effect: "Solid card 6 effect",
    stats: {damage: 6, health: 6, damageReduction: 6}
  }, {
    id: 56,
    name: "Solid card 7",
    type: "Magic",
    effect: "Solid card 7 effect",
    stats: {}
  }, {
    id: 57,
    name: "Solid card 8",
    type: "Magic",
    effect: "Solid card 8 effect",
    stats: {}
  }, {
    id: 58,
    name: "Solid card 9",
    type: "Magic",
    effect: "Solid card 9 effect",
    stats: {}
  }, {
    id: 59,
    name: "Solid card 10",
    type: "Trap",
    effect: "Solid card 10 effect",
    stats: {}
  }, {
    id: 60,
    name: "Solid card 11",
    type: "Trap",
    effect: "Solid card 11 effect",
    stats: {}
  }, {
    id: 61,
    name: "Solid card 12",
    type: "Trap",
    effect: "Solid card 12 effect",
    stats: {}
  }
];

const liquidCards = [
  {
    id: 100,
    name: "Liquid card 1",
    type: "Minion",
    effect: "Liquid card 1 effect",
    stats: {damage: 1, health: 1, absorbChance: 1}
  }, {
    id: 101,
    name: "Liquid card 2",
    type: "Minion",
    effect: "Liquid card 2 effect",
    stats: {damage: 2, health: 2, absorbChance: 2}
  }, {
    id: 102,
    name: "Liquid card 3",
    type: "Minion",
    effect: "Liquid card 3 effect",
    stats: {damage: 3, health: 3, absorbChance: 3}
  }, {
    id: 103,
    name: "Liquid card 4",
    type: "Minion",
    effect: "Liquid card 4 effect",
    stats: {damage: 4, health: 4, absorbChance: 4}
  }, {
    id: 104,
    name: "Liquid card 5",
    type: "Minion",
    effect: "Liquid card 5 effect",
    stats: {damage: 5, health: 5, absorbChance: 5}
  }, {
    id: 105,
    name: "Liquid card 6",
    type: "Minion",
    effect: "Liquid card 6 effect",
    stats: {damage: 6, health: 6, absorbChance: 6}
  }, {
    id: 106,
    name: "Liquid card 7",
    type: "Magic",
    effect: "Liquid card 7 effect",
    stats: {}
  }, {
    id: 107,
    name: "Liquid card 8",
    type: "Magic",
    effect: "Liquid card 8 effect",
    stats: {}
  }, {
    id: 108,
    name: "Liquid card 9",
    type: "Magic",
    effect: "Liquid card 9 effect",
    stats: {}
  }, {
    id: 109,
    name: "Liquid card 10",
    type: "Trap",
    effect: "Liquid card 10 effect",
    stats: {}
  }, {
    id: 110,
    name: "Liquid card 11",
    type: "Trap",
    effect: "Liquid card 11 effect",
    stats: {}
  }, {
    id: 111,
    name: "Liquid card 12",
    type: "Trap",
    effect: "Liquid card 12 effect",
    stats: {}
  }
];

const gasCards = [
  {
    id: 150,
    name: "Gas card 1",
    type: "Minion",
    effect: "Gas card 1 effect",
    stats: {damage: 1, health: 1, neurotoxin: 1}
  }, {
    id: 151,
    name: "Gas card 2",
    type: "Minion",
    effect: "Gas card 2 effect",
    stats: {damage: 2, health: 2, neurotoxin: 2}
  }, {
    id: 152,
    name: "Gas card 3",
    type: "Minion",
    effect: "Gas card 3 effect",
    stats: {damage: 3, health: 3, neurotoxin: 3}
  }, {
    id: 153,
    name: "Gas card 4",
    type: "Minion",
    effect: "Gas card 4 effect",
    stats: {damage: 4, health: 4, neurotoxin: 4}
  }, {
    id: 154,
    name: "Gas card 5",
    type: "Minion",
    effect: "Gas card 5 effect",
    stats: {damage: 5, health: 5, neurotoxin: 5}
  }, {
    id: 155,
    name: "Gas card 6",
    type: "Minion",
    effect: "Gas card 6 effect",
    stats: {damage: 6, health: 6, neurotoxin: 6}
  }, {
    id: 156,
    name: "Gas card 7",
    type: "Magic",
    effect: "Gas card 7 effect",
    stats: {}
  }, {
    id: 157,
    name: "Gas card 8",
    type: "Magic",
    effect: "Gas card 8 effect",
    stats: {}
  }, {
    id: 158,
    name: "Gas card 9",
    type: "Magic",
    effect: "Gas card 9 effect",
    stats: {}
  }, {
    id: 159,
    name: "Gas card 10",
    type: "Trap",
    effect: "Gas card 10 effect",
    stats: {}
  }, {
    id: 160,
    name: "Gas card 11",
    type: "Trap",
    effect: "Gas card 11 effect",
    stats: {}
  }, {
    id: 161,
    name: "Gas card 12",
    type: "Trap",
    effect: "Gas card 12 effect",
    stats: {}
  }
];

const plasmaCards = [
  {
    id: 200,
    name: "Plasma card 1",
    type: "Minion",
    effect: `
      If Plasma card 1 procs
      <span class="f--red"><i class="fas fa-khanda"></i></span>,
      it can attack again.
    `,
    stats: {damage: 15, health: 50, criticalChance: 50}
  }, {
    id: 201,
    name: "Plasma card 2",
    type: "Minion",
    effect: `
      When summoned, 10% of your Life Points are transfered into *cardname*
      damage
    `,
    stats: {damage: 2, health: 2, criticalChance: 2}
  }, {
    id: 202,
    name: "Plasma card 3",
    type: "Minion",
    effect: `
      Gains
      <span class="f--red">+1% <i class="fas fa-khanda"></i></span>
      for each
      <span class="f--green">1% missing <i class="fas fa-heart"></i></span>,
      and converts excess
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      to
      <span class="f--orange"><i class="fas fa-fire"></i></span>.
    `,
    stats: {damage: 10, health: 100, criticalChance: 25}
  }, {
    id: 203,
    name: "Plasma card 4",
    type: "Minion",
    effect: `
      Gains <span class="f--red">+20% <i class="fas fa-khanda"></i></span> for
      each Minion on your field, self included.
    `,
    stats: {damage: 25, health: 75, criticalChance: 20}
  }, {
    id: 204,
    name: "Plasma card 5",
    type: "Minion",
    effect: `
      Executes Minions below
      <span class="f--green">5% <i class="fas fa-heart"></i></span>
      after combat.
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      procs execute Minions below
      <span class="f--green">10% <i class="fas fa-heart"></i></span>
      instead. Works only on minions.
    `,
    stats: {damage: 20, health: 65, criticalChance: 25}
  }, {
    id: 205,
    name: "Plasma card 6",
    type: "Minion",
    effect: `
      If Plasma card 6 procs
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      , the opposing card is stunned.
      <br>
      <i><b>* Stunned</b>: Not able to attack for 1 turn.</i>
    `,
    stats: {damage: 15, health: 50, criticalChance: 75}
  }, {
    id: 206,
    name: "Plasma card 7",
    type: "Magic",
    effect: `
      Give one minion
      <span class="f--red">+6/6 <i class="fas fa-khanda"></i></span>.
    `,
    stats: {}
  }, {
    id: 207,
    name: "Plasma card 8",
    type: "Magic",
    effect: "Plasma card 8 effect",
    stats: {}
  }, {
    id: 208,
    name: "Plasma card 9",
    type: "Magic",
    effect: "Plasma card 9 effect",
    stats: {}
  }, {
    id: 209,
    name: "Plasma card 10",
    type: "Trap",
    effect: `
      The next Minion your opponent attacks will gain
      <span class="f--red">+6/6 <i class="fas fa-khanda"></i></span>
      until the end of their turn.
    `,
    stats: {}
  }, {
    id: 210,
    name: "Plasma card 11",
    type: "Trap",
    effect: "Plasma card 11 effect",
    stats: {}
  }, {
    id: 211,
    name: "Plasma card 12",
    type: "Trap",
    effect: "Plasma card 12 effect",
    stats: {}
  }
];

enum klass {NEUTRAL, SOLID, LIQUID, GAS, PLASMA};

const cardz = [
  // NEUTRAL
  {
    id: 0,
    klass: klass.NEUTRAL,
    name: "Neutral card 1",
    type: "Minion",
    effect: "Neutral card 1 effect",
    stats: {damage: 1, health: 1}
  }, {
    id: 1,
    klass: klass.NEUTRAL,
    name: "Neutral card 2",
    type: "Minion",
    effect: "Neutral card 2 effect",
    stats: {damage: 2, health: 2}
  }, {
    id: 2,
    klass: klass.NEUTRAL,
    name: "Neutral card 3",
    type: "Minion",
    effect: "Neutral card 3 effect",
    stats: {damage: 3, health: 3}
  }, {
    id: 3,
    klass: klass.NEUTRAL,
    name: "Neutral card 4",
    type: "Minion",
    effect: "Neutral card 4 effect",
    stats: {damage: 4, health: 4}
  }, {
    id: 4,
    klass: klass.NEUTRAL,
    name: "Neutral card 5",
    type: "Minion",
    effect: "Neutral card 5 effect",
    stats: {damage: 5, health: 5}
  }, {
    id: 5,
    klass: klass.NEUTRAL,
    name: "Neutral card 6",
    type: "Minion",
    effect: "Neutral card 6 effect",
    stats: {damage: 6, health: 6}
  }, {
    id: 6,
    klass: klass.NEUTRAL,
    name: "Neutral card 7",
    type: "Magic",
    effect: "Neutral card 7 effect",
    stats: {}
  }, {
    id: 7,
    klass: klass.NEUTRAL,
    name: "Neutral card 8",
    type: "Magic",
    effect: "Neutral card 8 effect",
    stats: {}
  }, {
    id: 8,
    klass: klass.NEUTRAL,
    name: "Neutral card 9",
    type: "Magic",
    effect: "Neutral card 9 effect",
    stats: {}
  }, {
    id: 9,
    klass: klass.NEUTRAL,
    name: "Neutral card 10",
    type: "Trap",
    effect: "Neutral card 10 effect",
    stats: {}
  }, {
    id: 10,
    klass: klass.NEUTRAL,
    name: "Neutral card 11",
    type: "Trap",
    effect: "Neutral card 11 effect",
    stats: {}
  }, {
    id: 11,
    klass: klass.NEUTRAL,
    name: "Neutral card 12",
    type: "Trap",
    effect: "Neutral card 12 effect",
    stats: {}
  },
  // SOLID
  {
    id: 50,
    klass: klass.SOLID,
    name: "Solid card 1",
    type: "Minion",
    effect: "Solid card 1 effect",
    stats: {damage: 1, health: 1, damageReduction: 1}
  }, {
    id: 51,
    klass: klass.SOLID,
    name: "Solid card 2",
    type: "Minion",
    effect: "Solid card 2 effect",
    stats: {damage: 2, health: 2, damageReduction: 2}
  }, {
    id: 52,
    klass: klass.SOLID,
    name: "Solid card 3",
    type: "Minion",
    effect: "Solid card 3 effect",
    stats: {damage: 3, health: 3, damageReduction: 3}
  }, {
    id: 53,
    klass: klass.SOLID,
    name: "Solid card 4",
    type: "Minion",
    effect: "Solid card 4 effect",
    stats: {damage: 4, health: 4, damageReduction: 4}
  }, {
    id: 54,
    klass: klass.SOLID,
    name: "Solid card 5",
    type: "Minion",
    effect: "Solid card 5 effect",
    stats: {damage: 5, health: 5, damageReduction: 5}
  }, {
    id: 55,
    klass: klass.SOLID,
    name: "Solid card 6",
    type: "Minion",
    effect: "Solid card 6 effect",
    stats: {damage: 6, health: 6, damageReduction: 6}
  }, {
    id: 56,
    klass: klass.SOLID,
    name: "Solid card 7",
    type: "Magic",
    effect: "Solid card 7 effect",
    stats: {}
  }, {
    id: 57,
    klass: klass.SOLID,
    name: "Solid card 8",
    type: "Magic",
    effect: "Solid card 8 effect",
    stats: {}
  }, {
    id: 58,
    klass: klass.SOLID,
    name: "Solid card 9",
    type: "Magic",
    effect: "Solid card 9 effect",
    stats: {}
  }, {
    id: 59,
    klass: klass.SOLID,
    name: "Solid card 10",
    type: "Trap",
    effect: "Solid card 10 effect",
    stats: {}
  }, {
    id: 60,
    klass: klass.SOLID,
    name: "Solid card 11",
    type: "Trap",
    effect: "Solid card 11 effect",
    stats: {}
  }, {
    id: 61,
    klass: klass.SOLID,
    name: "Solid card 12",
    type: "Trap",
    effect: "Solid card 12 effect",
    stats: {}
  },
  // LIQUID
  {
    id: 100,
    klass: klass.LIQUID,
    name: "Liquid card 1",
    type: "Minion",
    effect: "Liquid card 1 effect",
    stats: {damage: 1, health: 1, absorbChance: 1}
  }, {
    id: 101,
    klass: klass.LIQUID,
    name: "Liquid card 2",
    type: "Minion",
    effect: "Liquid card 2 effect",
    stats: {damage: 2, health: 2, absorbChance: 2}
  }, {
    id: 102,
    klass: klass.LIQUID,
    name: "Liquid card 3",
    type: "Minion",
    effect: "Liquid card 3 effect",
    stats: {damage: 3, health: 3, absorbChance: 3}
  }, {
    id: 103,
    klass: klass.LIQUID,
    name: "Liquid card 4",
    type: "Minion",
    effect: "Liquid card 4 effect",
    stats: {damage: 4, health: 4, absorbChance: 4}
  }, {
    id: 104,
    klass: klass.LIQUID,
    name: "Liquid card 5",
    type: "Minion",
    effect: "Liquid card 5 effect",
    stats: {damage: 5, health: 5, absorbChance: 5}
  }, {
    id: 105,
    klass: klass.LIQUID,
    name: "Liquid card 6",
    type: "Minion",
    effect: "Liquid card 6 effect",
    stats: {damage: 6, health: 6, absorbChance: 6}
  }, {
    id: 106,
    klass: klass.LIQUID,
    name: "Liquid card 7",
    type: "Magic",
    effect: "Liquid card 7 effect",
    stats: {}
  }, {
    id: 107,
    klass: klass.LIQUID,
    name: "Liquid card 8",
    type: "Magic",
    effect: "Liquid card 8 effect",
    stats: {}
  }, {
    id: 108,
    klass: klass.LIQUID,
    name: "Liquid card 9",
    type: "Magic",
    effect: "Liquid card 9 effect",
    stats: {}
  }, {
    id: 109,
    klass: klass.LIQUID,
    name: "Liquid card 10",
    type: "Trap",
    effect: "Liquid card 10 effect",
    stats: {}
  }, {
    id: 110,
    klass: klass.LIQUID,
    name: "Liquid card 11",
    type: "Trap",
    effect: "Liquid card 11 effect",
    stats: {}
  }, {
    id: 111,
    klass: klass.LIQUID,
    name: "Liquid card 12",
    type: "Trap",
    effect: "Liquid card 12 effect",
    stats: {}
  },
  // GAS
  {
    id: 150,
    klass: klass.GAS,
    name: "Gas card 1",
    type: "Minion",
    effect: "Gas card 1 effect",
    stats: {damage: 1, health: 1, neurotoxin: 1}
  }, {
    id: 151,
    klass: klass.GAS,
    name: "Gas card 2",
    type: "Minion",
    effect: "Gas card 2 effect",
    stats: {damage: 2, health: 2, neurotoxin: 2}
  }, {
    id: 152,
    klass: klass.GAS,
    name: "Gas card 3",
    type: "Minion",
    effect: "Gas card 3 effect",
    stats: {damage: 3, health: 3, neurotoxin: 3}
  }, {
    id: 153,
    klass: klass.GAS,
    name: "Gas card 4",
    type: "Minion",
    effect: "Gas card 4 effect",
    stats: {damage: 4, health: 4, neurotoxin: 4}
  }, {
    id: 154,
    klass: klass.GAS,
    name: "Gas card 5",
    type: "Minion",
    effect: "Gas card 5 effect",
    stats: {damage: 5, health: 5, neurotoxin: 5}
  }, {
    id: 155,
    klass: klass.GAS,
    name: "Gas card 6",
    type: "Minion",
    effect: "Gas card 6 effect",
    stats: {damage: 6, health: 6, neurotoxin: 6}
  }, {
    id: 156,
    klass: klass.GAS,
    name: "Gas card 7",
    type: "Magic",
    effect: "Gas card 7 effect",
    stats: {}
  }, {
    id: 157,
    klass: klass.GAS,
    name: "Gas card 8",
    type: "Magic",
    effect: "Gas card 8 effect",
    stats: {}
  }, {
    id: 158,
    klass: klass.GAS,
    name: "Gas card 9",
    type: "Magic",
    effect: "Gas card 9 effect",
    stats: {}
  }, {
    id: 159,
    klass: klass.GAS,
    name: "Gas card 10",
    type: "Trap",
    effect: "Gas card 10 effect",
    stats: {}
  }, {
    id: 160,
    klass: klass.GAS,
    name: "Gas card 11",
    type: "Trap",
    effect: "Gas card 11 effect",
    stats: {}
  }, {
    id: 161,
    klass: klass.GAS,
    name: "Gas card 12",
    type: "Trap",
    effect: "Gas card 12 effect",
    stats: {}
  },
  // PLASMA
  {
    id: 200,
    klass: klass.PLASMA,
    name: "Plasma card 1",
    type: "Minion",
    effect: `
      If Plasma card 1 procs
      <span class="f--red"><i class="fas fa-khanda"></i></span>,
      it can attack again.
    `,
    stats: {damage: 15, health: 50, criticalChance: 50}
  }, {
    id: 201,
    klass: klass.PLASMA,
    name: "Plasma card 2",
    type: "Minion",
    effect: `
      When summoned, 10% of your Life Points are transfered into *cardname*
      damage
    `,
    stats: {damage: 2, health: 2, criticalChance: 2}
  }, {
    id: 202,
    klass: klass.PLASMA,
    name: "Plasma card 3",
    type: "Minion",
    effect: `
      Gains
      <span class="f--red">+1% <i class="fas fa-khanda"></i></span>
      for each
      <span class="f--green">1% missing <i class="fas fa-heart"></i></span>,
      and converts excess
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      to
      <span class="f--orange"><i class="fas fa-fire"></i></span>.
    `,
    stats: {damage: 10, health: 100, criticalChance: 25}
  }, {
    id: 203,
    klass: klass.PLASMA,
    name: "Plasma card 4",
    type: "Minion",
    effect: `
      Gains <span class="f--red">+20% <i class="fas fa-khanda"></i></span> for
      each Minion on your field, self included.
    `,
    stats: {damage: 25, health: 75, criticalChance: 20}
  }, {
    id: 204,
    klass: klass.PLASMA,
    name: "Plasma card 5",
    type: "Minion",
    effect: `
      Executes Minions below
      <span class="f--green">5% <i class="fas fa-heart"></i></span>
      after combat.
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      procs execute Minions below
      <span class="f--green">10% <i class="fas fa-heart"></i></span>
      instead. Works only on minions.
    `,
    stats: {damage: 20, health: 65, criticalChance: 25}
  }, {
    id: 205,
    klass: klass.PLASMA,
    name: "Plasma card 6",
    type: "Minion",
    effect: `
      If Plasma card 6 procs
      <span class="f--red"><i class="fas fa-khanda"></i></span>
      , the opposing card is stunned.
      <br>
      <i><b>* Stunned</b>: Not able to attack for 1 turn.</i>
    `,
    stats: {damage: 15, health: 50, criticalChance: 75}
  }, {
    id: 206,
    klass: klass.PLASMA,
    name: "Plasma card 7",
    type: "Magic",
    effect: `
      Give one minion
      <span class="f--red">+6/6 <i class="fas fa-khanda"></i></span>.
    `,
    stats: {}
  }, {
    id: 207,
    klass: klass.PLASMA,
    name: "Plasma card 8",
    type: "Magic",
    effect: "Plasma card 8 effect",
    stats: {}
  }, {
    id: 208,
    klass: klass.PLASMA,
    name: "Plasma card 9",
    type: "Magic",
    effect: "Plasma card 9 effect",
    stats: {}
  }, {
    id: 209,
    klass: klass.PLASMA,
    name: "Plasma card 10",
    type: "Trap",
    effect: `
      The next Minion your opponent attacks will gain
      <span class="f--red">+6/6 <i class="fas fa-khanda"></i></span>
      until the end of their turn.
    `,
    stats: {}
  }, {
    id: 210,
    klass: klass.PLASMA,
    name: "Plasma card 11",
    type: "Trap",
    effect: "Plasma card 11 effect",
    stats: {}
  }, {
    id: 211,
    klass: klass.PLASMA,
    name: "Plasma card 12",
    type: "Trap",
    effect: "Plasma card 12 effect",
    stats: {}
  }
]

const cards = new Map([
  [0, neutralCards],
  [1, solidCards],
  [2, liquidCards],
  [3, gasCards],
  [4, plasmaCards]
]);

export default cards;
export {cardz};