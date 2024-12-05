// Función que devuelve true si a es menor que b
function isLessThan(a, b) {
    return a < b;
}

// Función que devuelve true si a es mayor o igual que b
function isGtREqual2(a, b) {
    return a >= b;
}

// Función que devuelve true si el valor de speed es mayor que 120
function isSpeeding(speed) {
    return speed > 120;
}

// Función que devuelve true si age está entre 13 y 18 inclusive
function isTeenager(age) {
    return age >= 13 && age <= 18;
}

// Función que devuelve true si artist está en la lista de favoritos
function isGoodMusic(artist) {
    const favoriteArtists = ["Adele", "Taylor Swift", "The Weeknd"]; // Lista de artistas favoritos
    return favoriteArtists.includes(artist);
}

let a = Number(prompt("Ingrese el valor de a:"));
let b = Number(prompt("Ingrese el valor de b:"));
console.log("¿a es menor que b? " + isLessThan(a, b));

let a = Number(prompt("Ingrese el valor de a:"));
let b = Number(prompt("Ingrese el valor de b:"));
console.log("¿a es mayor o igual que b? " + isGtREqual2(a, b));

let speed = Number(prompt("Ingrese la velocidad del vehículo:"));
console.log("¿Está excediendo el límite de velocidad? " + isSpeeding(speed));

let age = Number(prompt("Ingrese la edad:"));
console.log("¿Es un adolescente? " + isTeenager(age));

let artist = prompt("Ingrese el nombre del artista:");
console.log("¿Es un buen artista? " + isGoodMusic(artist));
