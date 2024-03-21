const time = new Date().getHours();

const getTimeOfDay = time => {
    let timeofday = ''
    if(time >= 4 && time < 12){
        isMorning(time);
        timeofday = "Morning";
    }
    else if (time >=12 && time < 17){
        isAfternoon();
        timeofday = "Afternoon";
    }
    else if (time >= 17 && time < 4) {
        isEvening();
        timeofday = "Evening"
    }
    return timeofday;
}

const isMorning = time => {
    if (time >= 4 && time < 12) return true;
    else return false;
}

const isAfternoon = time => {
    if (time >=12 && time < 17) return true;
    else return false; 
}

const isEvening = time => {
    if (time >= 17 || time < 4) return true;
    else return false;
}

module.exports = { getTimeOfDay , isMorning , isAfternoon , isEvening};