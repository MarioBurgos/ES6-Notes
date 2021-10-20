const cars = [
    { brand: "opel", color: "purple", type: "minivan", registration: new Date('2010-01-03'), cancelation: new Date('2038-01-03'), capacity: 7 },
    { brand: "seat", color: "red", type: "station wagon", registration: new Date('2018-03-03'), cancelation: new Date('2030-01-03'), capacity: 5 },
    { brand: "ferrari", color: "blue", type: "sport", registration: new Date('2021-02-03'), cancelation: new Date('2025-01-03'), capacity: 2 },
    { brand: "scania", color: "white", type: "truck", registration: new Date('2002-03-25'), cancelation: new Date('2031-01-03'), capacity: 3 },
    { brand: "nissan", color: "green", type: "pick up", registration: new Date('2015-11-15'), cancelation: new Date('2025-01-03'), capacity: 3 }
];

/** Array.prototype.filter() */
// Filter the list of cars for those who were registered in 2015
const date = cars.filter(c => {
    let startDate = new Date('2015-01-01');
    let endDate = new Date('2015-12-31');

    if (c.registration >= startDate && c.registration < endDate) {
        return true; // by returning true, we keep the car.
    }
});
console.log('Array.prototype.filter():');
console.log(date);


/** Array.prototype.map() */
// Return an array of the car brand and color
const carDetail = cars.map(c => `${c.brand} ${c.color}`);
console.log(carDetail);

/** Array.prototype.sort() */
// Sort the cars by registration date, oldest to youngest
const ordered = cars.sort((a, b) => a.registration > b.registration ? 1 : -1);
console.log(ordered);

/** Array.prototype.reduce() */
// How many will be all the cars registered?
var totalYears = cars.reduce((total, car) => {
    let regist = car.registration.getFullYear();
    let cancel = car.cancelation.getFullYear();
    return total + (cancel - regist);
}, 0); // this 0 inicializes total.
console.log(totalYears);

// Sort cars by its living time.
const oldest = cars.sort((a, b) => {
    let aRegist = a.registration.getFullYear();
    let aCancel = a.cancelation.getFullYear();
    let bRegist = b.registration.getFullYear();
    let bCancel = b.cancelation.getFullYear();
    let lastCar = aCancel - aRegist;
    let nextCar = bCancel - bRegist;
    return lastCar > nextCar ? -1 : 1;
});
console.log(oldest);

// Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//     .map(l => links.textContent)
//     .filter(streetName => streetName.includes('de'));

// Sort the cars alphabetically by brand name
const alpha = cars.sort((last, next) => {
    return last.brand > next.brand ? 1 : -1;
});
console.log(alpha);

// Sort the cars by capacity from lower to higher
const capacity = cars.sort((last, next) => {
    return last.capacity > next.capacity ? 1 : -1;
});
console.log(alpha);

// Sum up the instances of each of these:
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transport = data.reduce((object, item) => {
    if (!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {
    // bike: 0,
    // car: 0,
    // truck: 0,
    // van: 0,
    // walk: 0
});
console.log(transport);