'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // lat and long
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

    // Generate a description using the workout type and current date
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

// === Running ===
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}

// === Cycling ===
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

// === Running workout test ===
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);

console.log('=== Running Workout ===');
console.log('distance:', run1.distance, 'km');
console.log('duration:', run1.duration, 'min');
console.log('cadence:', run1.cadence, 'steps/min');
console.log('pace:', run1.pace.toFixed(1), 'min/km');
console.log('description:', run1.description);
console.log('id:', run1.id);

// === Cycling workout test ===
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);

console.log('=== Cycling Workout ===');
console.log('distance:', cycling1.distance, 'km');
console.log('duration:', cycling1.duration, 'min');
console.log('elevation gain:', cycling1.elevationGain, 'm');
console.log('speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('description:', cycling1.description);
console.log('id:', cycling1.id);

// === Inheritance test ===
run1.click();
cycling1.click();

console.log('=== Inheritance Test ===');
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// DOM ELEMENTS
// main form element
const form = document.querySelector('.form');

// container workout list
const containerWorkouts = document.querySelector('.workouts');

// input type
const inputType = document.querySelector('.form__input--type');

//input distance
const inputDistance = document.querySelector('.form__input--distance');

// input duration
const inputDuration = document.querySelector('.form__input--duration');

// input cadence
const inputCadence = document.querySelector('.form__input--cadence');

// input elevation
const inputElevation = document.querySelector('.form__input--elevation');

// // === Geolocation API test ===
// console.log('=== TESTING GEOLOCATION API ===');

// function getPosition() {
//   if (navigator.geolocation) {
//     console.log('🔍 Requesting user location...');
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         const { latitude, longitude } = position.coords;
//         console.log(`Your current location: ${latitude}, ${longitude}`);

//         const googleMapsUrl = `https://www.google.com/maps/@${latitude},${longitude}`;
//         console.log(`View on Google Maps: ${googleMapsUrl}`);

//         loadMap(position); // load map when location is available
//       },
//       function (error) {
//         console.error('Geolocation error:', error);

//         let message = 'Could not get your position. ';
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             message += 'Location access was denied.';
//             break;
//           case error.POSITION_UNAVAILABLE:
//             message += 'Location information is unavailable.';
//             break;
//           case error.TIMEOUT:
//             message += 'Location request timed out.';
//             break;
//           default:
//             message += 'An unknown error occurred.';
//             break;
//         }

//         alert(`📍 ${message}`);
//         loadDefaultMap(); // fallback map
//       },
//       {
//         timeout: 10000,
//         enableHighAccuracy: true,
//         maximumAge: 600000,
//       }
//     );
//   } else {
//     alert('❌ Geolocation is not supported by this browser');
//     loadDefaultMap();
//   }
// }

// // === Leaflet Map Integration ===
// function loadMap(position) {
//   const { latitude, longitude } = position.coords;
//   console.log('Loading map at coordinates:', latitude, longitude);

//   const coords = [latitude, longitude];
//   const map = L.map('map').setView(coords, 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);

//   L.marker(coords).addTo(map).bindPopup('📍 You are here!').openPopup();
//   console.log('Map loaded successfully at user location');

//   // add click events
//   map.on('click', function (mapEvent) {
//     console.log('Map Clicked!', mapEvent);

//     const { lat, lng } = mapEvent.latlng;
//     console.log(`Map clicked at: ${lat.toFixed(4)}<br>Lng:${lng.toFixed(4)}`);

//     L.marker([lat, lng])
//       .addTo(map)
//       .bindPopup(
//         `Workout location<br>Lat: ${lat.toFixed(4)}<br>Lng: ${lng.toFixed(4)}`
//       )
//       .openPopup();
//   });
//   console.log('Map loaded successfully at use location');
// }

// function loadDefaultMap() {
//   console.log('Loading default map location (London)');

//   const defaultCoords = [51.5074, -0.1278];
//   const map = L.map('map').setView(defaultCoords, 13);

//   L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution:
//       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//   }).addTo(map);

//   L.marker(defaultCoords)
//     .addTo(map)
//     .bindPopup('📍 Default location: London')
//     .openPopup();

//   console.log('Default map loaded successfully');
// }

// getPosition();

//Enhanced App class with better click handling
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App started...');
    this._getPosition();

    //  attach event handler for form submission
    form.addEventListener('submit', this._newWorkout.bind(this));
    // attach event handler for workout type change
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add click event listener
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    // turn on or display the elevation
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    // turn off or hide the input cadence
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    //add hiding animation

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    //helper functiomn
    //validate input that they are actual numbers that make sense
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    //validate that all numbers are positive
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    //prevent the default form submission behavior
    e.preventDefault();

    //store data or extract data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(`Creating ${type} workout: `, { distance, duration, lat, lng });

    // handle running workout
    if (type === `running`) {
      const cadence = +inputCadence.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      // create the running objecr with the map coordinates and form data
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // handle cycling workout
    if (type === `cycling`) {
      const elevation = +inputElevation.value;

      // validate all input elements are finite, positive, working
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration, elevation)
      )
        return alert('Inputs have to be positive numbers!');

      // create the cycling object with the map coordinates and form data
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log(`workout object created:`, workout);

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();

    console.log('Workout added successfully!');
  }

  _renderWorkout(workout) {
    // create base html

    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>
    `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;
    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
}

// Create the app
const app = new App();
