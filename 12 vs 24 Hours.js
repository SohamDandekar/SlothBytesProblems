//let inputTime = "12:00 am";
//let inputTime = "12:00 pm";
//let inputTime = "12:00";
//let inputTime = "0:00";
//let inputTime = "21:00";
//let inputTime = "9:00";
let inputTime = "9:00 am";


let convertTime = (inputTime) => {
    let resultTime = "";
    let hour = parseInt(inputTime.split(":")[0]);
    let min = inputTime.split(":")[1].slice(0, 2);

    if(inputTime.search("am") === -1 && inputTime.search("pm") === -1){
        if(hour > 12){
            hour -= 12;
            resultTime = hour + ":" + min + " pm";
        }else if(hour === 12){
            resultTime = hour + ":" + min + " pm";
        }else if(hour === 0){
            hour = 12;
            resultTime = hour + ":" + min + " am";
        }else{
            resultTime = hour + ":" + min + " am";
        }
        
        return resultTime;
    }else if(inputTime.search("pm") !== -1){
        if(hour < 12){
            hour += 12;
        }
    }else{
        if(hour === 12){
            hour = 0;
        }
    }
    resultTime = hour + ":" + min;
    return resultTime;
}

console.log(convertTime(inputTime));