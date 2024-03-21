const { getTimeOfDay, isMorning, isAfternoon, isEvening } = require('./timeofday')

const currentTime = new Date().getHours()

console.log(`The current time is ${currentTime}:00`)
console.log(`The time of day is ${getTimeOfDay(currentTime)}`)

const timesToTest = [ 4, 9, 12, 16, 18, 23 ]

timesToTest.forEach(time => {
    console.log(`---`)
    console.log(`Is ${time}:00 in the morning? ${isMorning(time)}`)
    console.log(`Is ${time}:00 in the afternoon? ${isAfternoon(time)}`)
    console.log(`Is ${time}:00 in the evening? ${isEvening(time)}`)
})