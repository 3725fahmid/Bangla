const dateOFBangla = setInterval(function(){
    const Today = new Date().toLocaleTimeString();
    // console.log(Today);


// const myDate = new Date();
// const hourl = myDate.getHours();
// const hour = hourl > 12 ? hourl-12 : hourl;
// const minutes = myDate.getMinutes();
// const sec = myDate.getSeconds();
// const AMPM = myDate.getHours();
// const days = AMPM > 12 ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ'; 


const hour = Today.slice(0,1);
const minutes = Today.slice(2,4);
const sec = Today.slice(5,7);
// const daysL = Today.slice(7,10);
const days = hour > "12" ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ';


    document.getElementById('hours').innerHTML = englishBangla(hour< 10 ? '০'+hour : hour);
    document.getElementById('minutes').innerHTML = englishBangla(minutes);
    document.getElementById('seconds').innerHTML = englishBangla(sec);
    document.getElementById('Day').innerHTML = englishBangla(days);
},1000)

function englishBangla(degits) {
    var banglaDigits = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    };

    var amount = degits;

    /* Converting English number to Devangari (js) */
    var amount_np = amount.toString().replace(/[0123456789]/g, function (s) {
        return banglaDigits[s];
    });
    return amount_np;
    // console.log(amount_np); // Output: ९८५७
}
