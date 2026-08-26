abstract class Employee{
    constructor(private name:string, protected exp:number){}
    abstract getBaseSalary():number;
    abstract getExpSalary():number;
    showProfile():void { console.log(`Name: ${this.name} ประสบการณ์ ${this.exp} ปี`)}
}
class Programmer extends Employee{
    getBaseSalary(): number {
        return 25000;
    }
    getExpSalary():number{
        return this.getBaseSalary() *0.1 * this.exp;
    }
}
class Manager extends Employee{
    getBaseSalary(): number {
        return 18000;
    }
    getExpSalary():number{
        return this.getBaseSalary() *0.12 * this.exp;
    }
}
const emp: Employee[] = [new Programmer("Jirat",10),new Manager("Mawin",8),new Programmer("note",12)];
emp.forEach(e =>{
    e.showProfile();
    console.log(`ได้รับเงินเดือนเริ่มต้น ${e.getBaseSalary()} บาท`);
    console.log(`เงินเดือน ${e.getExpSalary()} บาท`);
})
