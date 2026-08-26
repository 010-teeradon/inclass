class PaymentGateway{
    process(amount: number){}
}
class CreditCardPayment extends PaymentGateway{
    process(amount:number):void{
        console.log(`ชำระเงิน ${amount} บาท ด้วยบัตรเครดิต`);
    }
}
class PayPalPayment extends PaymentGateway{
    process(amount: number): void {
        console.log(`กำลังเปลี่ยนเส้นทางไปชำระเงินด้วย PayPay กรุณาอย่าปิด app จนกว่าดำเนินเสร็จ`);
    }
}
function executePayment(p:PaymentGateway,amt:number){
    p.process(amt);
}
const payments: PaymentGateway[]= [new CreditCardPayment(),new PayPalPayment()];
payments.forEach(payments => {
    executePayment(payments,1000);
})