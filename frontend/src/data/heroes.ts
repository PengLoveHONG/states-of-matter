const solidHero = {
  name: "Solid Hero",
  hp: 1500,
  damage: 55,
  special: {
    name: "Rock Solid",
    amount: 25,
    effect: `
    Solid Hero and Cards take % Health reduced damage from all sources.
    Whenever one of your minions die, gain additional 1% reduced damage.
    `
  }
};

const liquidHero = {
  name: "Liquid Hero",
  hp: 600,
  damage: 35,
  special: {
    name: "Absorption",
    amount: 50,
    effect: `
      <span class="f--purple">Passive</span><br>
      Liquid Hero and Minions have % chance to absorb all incoming damage.
      When this occurs, they gain +1% chance.<br>
      <span class="f--purple">Active</span> <i class="fas fa-battery-full"></i>
      30<br>
      Liquid hero and minions heal
      <span class="f--green">25% missing <i class="fas fa-heart"></i></span>.
    `
  }
};

const gasHero = {
  name: "Gas Hero",
  hp: 1000,
  damage: 10,
  special: {
    name: "Neurotoxin",
    amount: 1,
    effect: `
      Gas hero and minions attacks release a deadly poison on enemy hero and
      minions. They will lose
      <span class="f--green">1 <i class="fas fa-heart"></i></span>
      for each Neurotoxin stack applied. Whenever an enemy minion dies to
      neurotoxin, increase Neurotoxin damage dealt by 1.
    `
  }
};

const plasmaHero = {
  name: "Plasma Hero",
  hp: 800,
  damage: 70,
  special: {
    name: "Double Damage",
    amount: 30,
    effect: `
      Plasma hero and minions have % chance to deal Double Damage
      <span class="f--red"><i class="fas fa-khanda"></i></span>.
      Chance is increased by additional 1% every time Plasma Hero or Minions
      deal Double Damage
      <span class="f--red"><i class="fas fa-khanda"></i></span>.
    `
  }
}

const heroes = new Map([
  [1, solidHero],
  [2, liquidHero],
  [3, gasHero],
  [4, plasmaHero]
]);

export default heroes;