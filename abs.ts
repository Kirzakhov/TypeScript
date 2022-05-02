abstract class Vivek{
name:string;
age:number;
constructor(name:string, age:number){
this.name=name;
this.age=age;
}
abstract display():void;
abstract mul(i:number, j:number):number;
}

class Kumar extends Vivek{
address:string;
constructor(name:string, age:number, address:string){
super(name,age);
this.address=address; 
}
display = ():void => console.log(this.name,this.age,this.address);
add = (i:number, j:number):number => i+j;
mul = (i:number, j:number):number => i*j;
}

let obj = new Kumar("Vivek", 24, "Patna"); 
obj.display();
console.log(obj.add(5,6));
console.log(obj.mul(3,4));