const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: 210
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: 220
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: 195
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: 186
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: 195
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: 165
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: 145
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: 167
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: 220
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: 250
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: 200
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: 1400
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: 200
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: 200
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]
// // superhelden namen
const namen = superheroes.map((supernamen)=>{
    return supernamen.name
})

console.log(namen)

// // gewicht lichter dan 190 pounds

const lichteHeroes = superheroes.filter((itemLicht)=> {
    return itemLicht.weight <= 190
})
console.log(lichteHeroes)
// // helden van 200pounds:
const tweeHonderd= superheroes.filter((tweehndrd)=> {
    return tweehndrd.weight ===200
})
console.log(tweeHonderd)
// /debuut
const debuut = superheroes.map((Albums)=> {
    return Albums.first_appearance
})

console.log(debuut)

//dccomics

var dcComics  =  superheroes.filter ((hero) =>{
    return hero.publisher === "DC Comics";

})
   
console.log(dcComics)

// var MArvel  =  superheroes.filter ((hero2) =>{
//     return hero2.publisher === "Marvel Comics";})
    
// console.log(MArvel) 

//al gewichten van dc comics bij elkaar: 
var dcComics  =  superheroes.filter ((hero) =>{
    return hero.publisher === "DC Comics";
})  
const combinedWeight = dcComics.map((gewichten)=> {
return gewichten.weight}
)
const dcWeightTogether = combinedWeight.reduce(function (total, pounds){
    return total + pounds;
}, 0);

console.log("Het totale gewicht van alle DC comic Heroes is " + dcWeightTogether + " pounds!" )

// al gewichten van Marvel bij elkaar: 
var MArvel  =  superheroes.filter ((hero2) =>{
    return hero2.publisher === "Marvel Comics";})
const combinedWeight2 = MArvel.map((gewichten)=> {
return gewichten.weight}
)
combinedWeight2.pop();
const MArvelWeightTogether = combinedWeight2.reduce(function (total, pounds){
    return total + pounds;
}, 0);

console.log("Het totale gewicht van alle MARVEL Heroes is " + MArvelWeightTogether + " pounds!")

// de zwaarste superheld:
const combinedWeightAll = superheroes.map((zwaarste)=> {
return zwaarste.weight}
)
// console.log("de Zwaarste superheld weegt "+Math.max(BiggestHero))
//integers filteren omdat er ook een "unknown bijzit"
const result = combinedWeightAll.filter(number => parseInt(number) == number);
var max = result.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log("de Zwaarste superheld weegt maar liefst : " +max + ".!!!!")

