class Monster{
    constructor(public name:string,public health:number,public damage:number){}
    attack():void{
        console.log(`Monster ${this.name} health ${this.health} attack ${this.damage} damage`);
    }
}
class FireMonster extends Monster{
    constructor(public name:string,public health:number,public damage:number){super(name,health,damage)}
    attack():void{
        console.log(`FireMonster ${this.name} health ${this.health} uses Fire Blast  ${this.damage} damage`);
    }
}
class WaterMonster extends Monster{
    constructor(public name:string,public health:number,public damage:number){super(name,health,damage)}
    attack():void{
        console.log(`FireMonster ${this.name} health ${this.health} uses Water Gun  ${this.damage} damage`);
    }
}
class GrassMonster extends Monster{
    constructor(public name:string,public health:number,public damage:number){super(name,health,damage)}
    attack():void{
        console.log(`FireMonster ${this.name} health ${this.health} uses Vine Whip ${this.damage} damage`);
    }
}
function BattleArena(Monsters:Monster[]):void{
    console.log("=== BATTLE ARENA START ===");
    Monsters.forEach((Monster) => {
        Monster.attack();
    });
}
const monster:Monster[]=[
    new FireMonster("MAWIN",15000,6000),
    new WaterMonster("JIRIT",32000,4000),
    new GrassMonster("P",28000,7000)
];
BattleArena(monster);