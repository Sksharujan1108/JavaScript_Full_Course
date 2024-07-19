const movie = {
    title: 'The Dark Knight',
    year: 2019,
    actor: 'Kavin',
    music: 'Arr',
    director: "Lokesh",
    producer: 'Anbu'
  }
// destructuring the object 
              // variable name set
const {music: myFavMusicDirector , actor: myFavActor} = movie;

console.log(myFavMusicDirector, myFavActor) // Arr kavin

console.log('====================================');
console.log('************************************************');
console.log('====================================');

       // key name include
const {title, year, actor, music} = movie;
console.log(title) // The Dark Knight
console.log(actor) // Kavin
console.log(music) // Arr

console.log('====================================');
console.log('************************************************');
console.log('====================================');

function sings(music) {
    return music
}

console.log(sings(movie))
// {title: 'The Dark Knight', year: 2019, actor: 'Kavin', music: 'Arr', director: 'Lokesh', …}

function actors({actor}) {
    return actor
}

console.log(actors(movie)) // Kavin