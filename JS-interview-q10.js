// How can define Immutable object/array in javascript

const obj = {id: 1, name: "MyR&D"};
Object.freeze(obj); // Cannot add, delete, modify

obj.id = 20;
delete obj.name;
obj.location = "Bangalore";

console.log(obj);


const ary = [10, 20, 30];
Object.freeze(ary);

//ary.push(40);
console.log(ary);
//delete ary[0];
//ary.splice(0, 1);
ary[1] = 100;
console.log(ary);

