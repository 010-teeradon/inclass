class Shape{
    draw():void{ console.log("วาดรูปร่าง")};
    area():void{};
}
class Square extends Shape{
    constructor(public side: number){super();}
    draw():void{ console.log("วาดรูปสี่เหลี่ยนจตุรัส")};
    area():void{ console.log(`สี่เหลี่ยนจตุรัสที่มีด้าน ${this.side} มีพื้นที่ ${Math.pow(this.side,2)}`);}
}
class Triangle extends Shape{
    constructor(public base:number,public high:number){ super();}
    draw():void{ console.log("วาดรูปสามเหลี่ยม")};

    area():void{ console.log(`สามเหลี่ยมที่มีฐาน ${this.base} ความสูง ${this.high} มีพื้นที่ ${this.base * this.high /2}`)};
}
const shapes: Shape[]= [new Shape(), new Square(8), new Square(12),new Triangle(8,10)];
shapes.forEach(shape =>{
    shape.draw();
    shape.area();
})