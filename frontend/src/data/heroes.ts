const solidHero = {
  name: "Solid Hero",
  klass: 1,
  hp: 1500,
  damage: 55,
  special: {
    name: "Rock Solid",
    amount: 25,
    effect: `
      <span class="f--purple">& Passive</span>
      <br>
      Solid Hero and Minions take % reduced damage from all sources.
      <hr>
      <span class="f--purple">* Spike Shield</span>
      [<span class="f--blue">10 <i class="fas fa-battery-full"></i></span>]
      <br>
      Solid Hero and Minions gain a stack of Spike Shield. After their next combat,
      they will deal additional damage based on damage that they block with their Passive, consuming the stack.
    `
  }
};

const liquidHero = {
  name: "Liquid Hero",
  klass: 2,
  hp: 600,
  damage: 35,
  special: {
    name: "Fountain of Life",
    amount: 50,
    effect: `
      <span class="f--purple">Mourn</span>
      <br>
      Liquid Hero and Minions heal
      <span class="f--green">50% missing <i class="fas fa-heart"></i></span>
      whenever a Liquid Minion dies.
      <hr>
      <span class="f--purple">Rejuvenation</span>
      [<span class="f--blue">30 <i class="fas fa-battery-full"></i></span>]
      <br>
      Liquid hero and minions heal
      <span class="f--green">10% missing <i class="fas fa-heart"></i></span>.
    `
  }
};

const gasHero = {
  name: "Gas Hero",
  klass: 3,
  hp: 1000,
  damage: 10,
  special: {
    name: "Neurotoxin",
    amount: 1,
    effect: `
      <span class="f--purple">& Vanish</span>
      <br>
      Gas Hero and Minions hide in the gas clouds, having % chance to evade all
      damage when being attacked.
      <hr>
      <span class="f--purple">* Neurotoxin</span>
      [<span class="f--blue">25 <i class="fas fa-battery-full"></i></span>]
      <br>
      Release a deadly neurotoxin on the enemy field, causing enemy Hero and
      Minions to lose <span class="f--green">1 <i class="fas fa-heart"></i></span>
      at the end of each turn per Neurotoxin stack.
    `
  }
};

const plasmaHero = {
  name: "Plasma Hero",
  klass: 4,
  damage: 70,
  hp: 800,
  // mana: 150,
  // passive: {
  //   amount: 33,
  //   text: `
  //     <span class="f--purple">Passive</span><br>
  //     Plasma hero and minions have % chance to deal
  //     <span class="f--red">Double Damage <i class="fas fa-khanda"></i></span>
  //     with their attacks.
  //   `
  // },
  // active: {
  //   manaCost: 35,
  //   text: `
  //     <span class="f--purple">Active</span>
  //     [10 <i class="fas fa-battery-full fa-fw"></i>]<br>
  //     Sacrifice any Minion to overcharge Plasma Hero and Minions, granting them
  //     <span class="f--red">+100% <i class="fas fa-khanda"></i></span>
  //     until the end of your turn.
  //   `
  // }
  special: {
    name: "Neurotoxin",
    amount: 1,
    effect: `
      <span class="f--purple">Passive</span><br>
      Plasma hero and minions have % chance to deal
      <span class="f--red">Double Damage <i class="fas fa-khanda"></i></span>
      with their attacks.
      <hr>
      <span class="f--purple">Active</span>
       [10 <i class="fas fa-battery-full fa-fw"></i>]<br>
       Sacrifice any Minion to overcharge Plasma Hero and Minions, granting them
       <span class="f--red">+100% <i class="fas fa-khanda"></i></span>
       until the end of your turn.
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