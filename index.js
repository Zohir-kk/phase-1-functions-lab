// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    const scuberHeadquarters = 42;
    if (someValue >= scuberHeadquarters) {
      return someValue - scuberHeadquarters;
    } else {
      return scuberHeadquarters - someValue;
    }
  }
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(someValue) {
    const scuberHeadquarters = 42;
    if (someValue>=scuberHeadquarters){
        return (someValue - scuberHeadquarters) * 264
    } else {
        return (scuberHeadquarters - someValue) * 264
    }

}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start,destination) {
    if (start>=destination){
        return (start-destination) *264
    } else {
       return (destination-start)* 264
    }
}
console.log(distanceTravelledInFeet(43,48));

    function calculatesFarePrice(start, destination) {
        if (destination >= start) {
          const feets = (destination - start) * 264;
          if (feets <= 400) {
            return 0;
          } else if (feets > 400 && feets <= 2000) {
            return 2.56;
          } else if (feets > 2000 && feets <= 2500) {
            return 25;
          } else {
            return "cannot travel that far";
          }
        }  else {
            const feets = (start - destination) * 264;
            if (feets <= 400) {
                return 0;
            } else if (feets > 400 && feets <= 2000) {
                return 2.56;
            } else if (feets > 2000 && feets <= 2500) {
                return 25;
            } else {
                return "cannot travel that far";
            }
        }
    }


console.log(calculatesFarePrice(34,24));