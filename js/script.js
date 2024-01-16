const guests = [
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
    /* console.log(guest) */

    return guest
})

console.log(guestsList)

