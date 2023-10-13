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
