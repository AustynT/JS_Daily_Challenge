const today = new Date();
const date = today.getDay();
const day_of_month = today.getDate()
const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Firday", "Saturday", "Sunday"]
const month_of_year = today.getMonth() + 1



function the_date_of_month(day_of_month){
    if(day_of_month < 9){
        let date_with_zero = "0" + String(day_of_month)
        return date_with_zero
    }
}

function the_month_of_the_year(month_of_year){
    if(month_of_year < 9){
        let month_with_zero = "0" + String(month_of_year)
        return month_with_zero
    }
}
function my_year(year){
    return year
}

export function print_the_current_date(){
    let month = the_month_of_the_year(month_of_year)
    let day = the_date_of_month(day_of_month)
    const year = today.getFullYear()
    return month + "/" + day + "/" + year
}

print_the_current_date()