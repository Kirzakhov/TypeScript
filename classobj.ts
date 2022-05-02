class Employee{
username:string;
age:number;
constructor(username:string,age:number){
this.username=username;
this.age=age;
}
display():void{
console.log("Employee name: "+this.username);
console.log("Employee age: "+this.age);
}
}
var obj = new Employee("Vishal", 25);
obj.display();