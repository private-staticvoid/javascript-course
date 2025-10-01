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

// Enhanced App class with better click handling
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
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
    const { lat, lng } = mapE.latlng;

    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    // Add a temporary marker to show where user clicked
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(`Clicked here: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
      .openPopup();
  }
}

// Create the app
const app = new App();
