class Animal{
    constructor(public name:string){}
    makesound():void{
        console.log(`${this.name} makes sound`);
    }
}
class Cat extends Animal{
    makesound(): void {
        console.log(`${this.name}: Meaws`)
    }
}
const animal =new Animal("Dig");
animal.makesound();
const cat= new Cat("P");
cat.makesound();