console.log("greeting mode");

let currentDate = new Date();

module.exports.date = currentDate;

module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if (hour>16)     
        return "Добврый вечер, " + name;
        else if(hour>10)        
            return "Добрый день, " + name;
        else 
            return "Доброе утро, " + name;
}