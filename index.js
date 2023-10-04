const vanilla = {Name:"Vanilla", Total:"3"}
const strawberry = {Name:"Strawberry", Total:"1"}
const coffee = {Name:"Coffee", Total:"2"}
console.table([vanilla, strawberry, coffee]);


let flavor = prompt("Froyo flavor you want?");
let num = prompt("How many would you want to order?");
let flavor2 = prompt("Would you want any other froyo flavor?");
let num2 = prompt("How many would you want to order?");
print(("flavor" + flavor));
print(("total" + num ));
console.table ([flavor, num, flavor2, num2]);