function convertToHebrew() {

    //שם ערך זמני במקום הצגת התאריך העברי עד שתבוא התשובה מהשרת
    document.querySelector('#hebrewDate').innerHTML ='...'

    //מקבל את התאריך שהוזן
    let gregorianDate = new Date(document.querySelector('#gregorianDate').value)

    //console-מדפיס את התאריך שהוזן ל
    console.log('date in gregorian Date\n', gregorianDate);

    //מקבל את שדה היום בתאריך שהוזן
    let day = gregorianDate.getDate()

    //מקבל את שדה החודש בתאריך שהוזן
    let month = gregorianDate.getMonth() + 1

    //מקבל את שדה השנה בתאריך שהוזן
    let year = gregorianDate.getFullYear()

    //console-מדפיס את היום, החודש והשנה של התאריך שהוזן ל
    console.log(`day: ${day}\nmonth: ${month}\nyear: ${year}`);

    //את המשתנים שמרכיבים את התאריך המבוקש url-מציב בכתובת ה
    let url = `https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`

    //מבצע בקשת שרת ומקבל את התאריך העברי החופף לתאריך הלועזי שהוזן
    fetch(url)
        .then((res) => res.json())
        .then((data) => document.querySelector('#hebrewDate').innerHTML = data.hebrew)
        .catch((error) => console.log(error))
}

