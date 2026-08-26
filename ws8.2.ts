export{};
class Notification{
    send(message: string){}
}
class EmailNotification extends Notification{
    send(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}
class SMSNotification extends Notification{
    send(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}
class PushNotification extends Notification{
    send(message: string): void {
        console.log(`Push Notification: ${message}`);
    }
}
const notification: Notification[] = [
    new EmailNotification(),
    new SMSNotification(),
    new PushNotification()
];

notification.forEach(item => {
    item.send("Hello Everyone");
});