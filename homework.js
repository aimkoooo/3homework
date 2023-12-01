function myFunc(carFuel, carSize) 
{
  if (carFuel === "gas") {
      if (carSize === "S") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "M") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "L") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "XL") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      }
  } 
  else if (carFuel === "diesel") 
  {
      if (carSize === "S") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "M") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "L") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      } else if (carSize === "XL") {
          console.log(`Refuel for ${carSize}, fuel type: ${carFuel}`);
      }
      else {}
  }
  
}

let carFuel = "gas";
let carSize = "XL";

myFunc(carFuel, carSize);
// myFunc();
