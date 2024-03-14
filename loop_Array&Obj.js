const urbanLegends = [
    "Kuchisake-Onna",
    "Aka Manto",
    "Tomino",
    "Hitobashira",
    "Aisha Kandisha",
    "The skinwalker",
    "Hannah Cranna",
    "La Mala Hora",
    "White Lady Lane"
]

// for loop for array
for(let i = 0; i < urbanLegends.length; i++){
    // console.log(urbanLegends[i]);
}

// while loop for array
let i = 0;
while(i < urbanLegends.length){
    // console.log(urbanLegends[i]);
    i++;
}

// for...of loop
for(const legend of urbanLegends){
    // console.log(legend);
}



const legendsByPlace = {
    Nepal: "The Yeti",
    India: "Kuldhara Village",
    UAE: "Jinn",
    Europe: "Krampus",
    USA: "Slaughterhouse Canyon",
    Bangladesh: "Mecho Bhoot",
    Japan: "Kiyotaki Tunnel"
}

// for...in loop
for(const legend in legendsByPlace){
    // console.log(`${legend}: ${legendsByPlace[legend]}`);
}
