const {format} = require("date-fns");

function getFormattedDate(){
    return format(new Date(), "EEEE, MMMM do yyyy - h:mm:ss a");
}

module.exports = getFormattedDate;