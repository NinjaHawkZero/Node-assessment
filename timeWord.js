let nums = [ "zero", "one", "two", "three", "four",
							"five", "six", "seven", "eight", "nine",
							"ten", "eleven", "twelve", "thirteen",
							"fourteen", "fifteen", "sixteen", "seventeen",
							"eighteen", "nineteen", "twenty", "twenty one",
							"twenty two", "twenty three", "twenty four",
							"twenty five", "twenty six", "twenty seven",
							"twenty eight", "twenty nine", 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four',
                            'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one',
                            'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight', 'forty nine',
                            'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven', 'fifty eight',
                            'fifty nine'
						];


let hourObj = {
    
    '12':'twelve',
    '13':'one',
    '14':'two',
    '15':'three',
    '16':'four',
    '17':'five',
    '18':'six',
    '19':'seven',
    '20':'eight',
    '21':'nine',
    '22':'ten',
    '23':'eleven'
}

let timeStr = '01:43'





function timeWord(time) {
    let word = '';
    let textHour;
    let timeOfDay;
    //String hour
    let hour = time.slice(0, 2);
    //Number hour
    let numHour = Number(hour);
    //String Minute
    let min = time.slice(3, 5);
    //Number Minute
    let numMin = Number(min);
    
    //Determine Am/Pm based on hour
    hourObj[hour] ? timeOfDay = 'pm' : timeOfDay = 'am';
    
    
    //Minutes in Text
    let textMin = nums[numMin];
    
    //Set hour text based on timeofday
    if(timeOfDay === 'pm' )
     {textHour = hourObj[hour]}
     else {textHour = nums[numHour]}


    //Set hour text to twelve if currently zero 
    if (textHour === 'zero') {
        textHour = 'twelve'
    }

    //If 12:00 pm return noon
    if(textHour === 'twelve' && textMin === "zero" && timeOfDay === 'pm') {
        word = 'noon';
        return word
    }
    //If 12:00 am return midnight
    if(textHour === 'twelve' && textMin === "zero" && timeOfDay === 'am') {
        word = 'midnight';
        return word
    }

    //If mins is 00 return text hour o clock
    if( min === '00' ) {
        word += textHour + ' ' +'O Clock'+ ' ' + timeOfDay; return word
    }

    //If first char of min string is 0 return text hour O text min, else text hour and text min
    if(min[0] === '0') {
        word += textHour +' ' + 'O' + ' ' + textMin + ' ' + timeOfDay;
        return word
    }
        else
    { word += textHour +' ' + textMin + ' ' + timeOfDay; return word}
   
}


console.log(timeWord(timeStr))

module.exports = timeWord
