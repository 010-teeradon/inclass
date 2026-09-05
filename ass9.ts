export{};
interface Taxable{
    applyTax(amount: number): number;
}
abstract class Worker{
    constructor(public name:string,public id:number){}
    abstract calculatePay(): number;
    getDetails(): string{
        return `Name: ${this.name}`;
    }
}
class HourlyWorker extends Worker{
    private hourlyRate: number;
    private hoursWorked: number;
    constructor(name: string, id: number, hourlyRate: number, hoursWorked: number) {
    super(name, id); 
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }
  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
class SalariedWorker extends Worker{
    private monthlySalary: number;
    constructor(name: string, id: number,monthlySalary:number){super(name,id);this.monthlySalary = monthlySalary;}
    calculatePay(): number {
    return this.monthlySalary;
  }
    applyTax(amount: number): number {
    return amount * 0.90;
  }
}
const hourly = new HourlyWorker("Mawin", 101, 200, 40);
const salaried = new SalariedWorker("Jirit", 102, 30000);
console.log(hourly.getDetails());
console.log(`Gross Pay: ${hourly.calculatePay()} บาท`);
console.log("----------------------------");
console.log(salaried.getDetails());
const grossPay = salaried.calculatePay();
const netPay = salaried.applyTax(grossPay);
console.log(`Gross Pay: ${grossPay} บาท`);
console.log(`Net Pay (After Tax): ${netPay} บาท`);