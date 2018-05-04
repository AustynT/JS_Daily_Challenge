
const today = new Date();
const day = today.getDay();
const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Firday", "Saturday", "Sunday"]
// console.log("Today is : " + days_of_week[day] +".")
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
function time_of_day(hour){
    if(hour > 12 ){
        let am_or_pm = "PM"
        return am_or_pm
    } else {
        let am_or_pm = "AM"
        return am_or_pm
    }
}

function none_military_time(hour){
    let time = time_of_day(hour);
    if(time == "PM" ){
        return hour - 12
    } else{
        return hour
    }
}

export function print_time_of_day(){
    let human_time = none_military_time(hour)
    return "Today is:" + days_of_week[day] + "\n" + "The Current time is : " + human_time + ":" + minute + ":" + second
}

print_time_of_day()
