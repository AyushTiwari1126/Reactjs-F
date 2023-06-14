class DateUtils {

  // function to generate currentDateTimeInUTC in 'ddMMyyyyhhmmss' format
  static getCurrentDateTimeInUTC() {
    let date = new Date()
    let year = date.getUTCFullYear()
    let month = date.getUTCMonth() + 1
    let day = date.getUTCDate()
    let hour = date.getUTCHours()
    let min = date.getUTCMinutes()
    let sec = date.getUTCSeconds()
    month = month.toString().padStart(2, '0')
    day = day.toString().padStart(2, '0')
    hour = hour.toString().padStart(2, '0')
    min = min.toString().padStart(2, '0')
    sec = sec.toString().padStart(2, '0')
    var formattedDate = day + month + year + hour + min + sec;
    return formattedDate;
  }

}

export default DateUtils;