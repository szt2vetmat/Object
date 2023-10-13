//1.Feladat


var user = {};
user.firstName = "John";
user.lastName = "Smith";
user.firstName = "Paul";
delete user.firstName;
console.log(user);

//2.Feladat

function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isEmpty({}));                  
  console.log(isEmpty({name: "John"}));


//3.Feladat

let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
 }
 
 let osszeg = 0;
 
 for (let szemely in fizetes) {
    console.log(szemely + " keres: " + fizetes[szemely] + " Ft");
    osszeg += fizetes[szemely];
 }
 
 console.log("Összesen: " + osszeg + " Ft");
 