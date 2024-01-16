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

const students = [
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

console.log(studentNameUppercase)