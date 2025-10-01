'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // let and long
    this.distance = distance; // km
    this.duration = duration; // min
  }
  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Generate A description using the workout type and current date
    this.Description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.click++;
  }
}

const testWorkout = new Workout({
  coords: [40.7128, -74.006],
  distance: 5.2,
  duration: 24,
});
console.log('Test workout: ', testWorkout);

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    // CALL THE PARENT CONSTRUCTOR WITH SUPER
    super(coords, distance, duration);
    // STORES THE STEPS PER MINUTE
    this.cadence = cadence;
    // CALCULATE THE PACE
    this.calcPace();
    // GENERATE THE DISCRIPTION NOW THAT WE HAVE THE TYPE
    this._setDescription();
  }

  calcPace() {
    // MIN PER KM
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    // store the elevation in meters
    this.elevationGain = elevationGain;
    // calculate the speed automatically
    this.calcSpeed();
    // generate the description with the cycling type
    this._setDescription();
  }

  calcSpeed() {
    // KM PER HOUR
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// === Running workout ===
// Properties: distance, duration, cadence, pace, description, id
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);

console.log('=== Running Workout ===');
console.log('distance:', run1.distance, 'km');
console.log('duration:', run1.duration, 'min');
console.log('cadence:', run1.cadence, 'steps/min');
console.log('pace:', run1.pace.toFixed(1), 'min/km');
console.log('description:', run1.description);
console.log('id:', run1.id);

// === Cycling workout ===
// Properties: distance, duration, elevationGain, speed, description, id
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);

console.log('=== Cycling Workout ===');
console.log('distance:', cycling1.distance, 'km');
console.log('duration:', cycling1.duration, 'min');
console.log('elevation gain:', cycling1.elevationGain, 'm');
console.log('speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('description:', cycling1.description);
console.log('id:', cycling1.id);

// === Inheritance test ===
// Both Running and Cycling inherit click() and clicks from Workout
run1.click();
cycling1.click();

console.log('=== Inheritance Test ===');
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);
