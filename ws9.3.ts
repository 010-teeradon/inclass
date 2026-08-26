export{};
abstract class PaymentGateway{
    protected tid: string;
    constructor(protected amount: number){
        this.tid = "TXN-"+Math.floor(1000+Math.random()*9000);
    }
    abstract processPayment(): boolean;
    printReceipt(success: boolean):void{
        if(success) console.log(`[Receipt] TXN: ${this.tid} | จำนวนเงิน ${this.amount} บาท`);
        else console.log(`[Receipt] TXN: ${this.tid} | สถานะ: ชำระไม่สำเร็จ`);
    }
}
class CreditCardPayment extends PaymentGateway{
    constructor(protected amount:number,private cardNumber: string){ super(amount);}
    processPayment(): boolean {
        if(this.cardNumber.length === 16){
            console.log(`[ชำระเงินด้วยบัตรเครดิต] ชาร์จเงิน ${this.amount} จากบัตรลงท้าย ${this.cardNumber.slice(-4)}`);
            return true;
        }
        else{
            console.log(`[ชำระเงินด้วยบัตรเครดิต] ไม่สำเร็จ`);
            return false;
        }
    }
}
class PromptPayPapment extends PaymentGateway{
    constructor(protected amount:number,private phoneNumber: string){ super(amount);}
    processPayment(): boolean {
        if(this.phoneNumber.length === 10){
            console.log(`[ชำระเงินด้วยบัตรเครดิต] ชาร์จเงิน ${this.amount} จากบัตรลงท้าย ${this.phoneNumber}`);
            return true;
        }
        else{
            console.log(`[ชำระเงินด้วย PromptPay] ไม่สำเร็จ`);
            return false;
        }
    }
}
const payments: PaymentGateway[]= [
    new CreditCardPayment(500,"123456789123456"),
    new CreditCardPayment(500000,"1234"),
    new PromptPayPapment(200,"0361234456"),
    new PromptPayPapment(2000,"036453234")
]
payments.forEach(payments =>{
    payments.printReceipt(payments.processPayment());
})