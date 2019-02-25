'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWVzdGVmYW0iLCJhIjoiY2pza2dzeTF4MTYzOTQ5bnpyZm96djd3dSJ9.fwglwbY2j0zooLW4jR0zlw'
let map = new mapboxgl.Map({
    container: 'map',
    style:'mapbox://styles/brianhouse/cjn0u552b52kr2spdz6yhpqj4',
    center: [-22.923103,-43.252815],
    zoom: 16,
    pitch: 45
})
