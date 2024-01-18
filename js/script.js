/* const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

const tableName = 'Tavolo Vip'

const guestsList = guests.map((guest, i) => {
    guest ={
        table: tableName,
        nameVip: guest,
        place: i+1
    }

    return guest
})

console.log(guestsList) */

/* const students = [
    {
        Id: 213,
        name: 'Marco della Rovere',
        voto: 78
    },
    {
        Id: 110,
        name: 'Paola Cortellessa',
        voto: 96
    },
    {
        Id: 250,
        name: 'Andrea Mantegna',
        voto: 48
    },
    {
        Id: 145,
        name: 'Gaia Borromini',
        voto: 48
    },
    {
        Id: 196,
        name: 'Luigi Grimaldello',
        voto: 68
    },
    {
        Id: 102,
        name: 'Piero della Francesca',
        voto: 78
    },
    {
        Id: 120,
        name: 'Francesca da Polenta',
        voto: 84
    }
]

const studentVotoOver = students.filter(({voto}) => voto >= 70)

console.log(studentVotoOver)

const studentVotoIdOver = students.filter((students) => students.voto >= 70 && students.Id >= 120)

console.log(studentVotoIdOver)

const studentNameUppercase = students.map(({name}) => name.toUpperCase())

console.log(studentNameUppercase) */

/* const bikes = [
    {
        name: 'Atala',
        weight: 90
    },
    {
        name: 'Basso',
        weight: 80
    },
    {
        name: 'Bianchi',
        weight: 100
    },
    {
        name: 'Bottocchia',
        weight: 150
    },
    {
        name: 'Carrera',
        weight: 120
    },
    {
        name: 'Cinelli',
        weight: 110
    },
    {
        name: 'De Rosa',
        weight: 70
    },
    {
        name: 'Ducati',
        weight: 140
    },
    {
        name: 'Garelli',
        weight: 100
    },
    {
        name: 'Kuota',
        weight: 90
    }
]

const weightMinBike = bikes.reduce((min, bike) => bike.weight < min.weight ?  bike : min, bikes[0])

console.log(weightMinBike) */

const teamsSerieA = [
    {
        name: 'Roma',
        point: 0,
        foul: 0
    },
    {
        name: 'Milan',
        point: 0,
        foul: 0
    },
    {
        name: 'Inter',
        point: 0,
        foul: 0
    },
    {
        name: 'Juve',
        point: 0,
        foul: 0
    }
]

const min = 0;
const max = 100;

// funzione per generare un numero casuale con un MAX e un MIN
const getRandomNum = (max, min) => Math.floor(Math.random()* (max + 1 - min) + min);

// nuovo array dove inserisco i numeri casuali
const teamsSerieARandom = teamsSerieA.map((teamSerieA) =>{
    teamSerieA.point = getRandomNum(max, min);
    teamSerieA.foul = getRandomNum(max, min);

    return teamSerieA
})
//stampiamo il risulato
console.log(teamsSerieARandom);

// nuovo array con solo il nome della squadra e i falli fatti, usando il destructuring
const teamsSerieANew = teamsSerieA.map(({name, foul}) =>(({name, foul})))
// stampiamo il risultato
console.log(teamsSerieANew)
