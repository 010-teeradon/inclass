class Appliance{
    constructor(public brand:string){}
    turnOn():void{}
}
class WashingMachine extends Appliance{
    turnOn(): void {
        console.log(`${this.brand} เครื่องซักผ้าเริ่มทำงาน: กำลังปั่นผ้า`);
    }
}
class Refrigerator extends Appliance{
    turnOn(): void {
        console.log(`${this.brand} ตู้เย็นเริ่มทำงาน: กำลังทำความเย็น...`);
    }
}
const washingMachine=new WashingMachine("LG");
washingMachine.turnOn();
const refrigerator=new Refrigerator("Samsung");
refrigerator.turnOn();
