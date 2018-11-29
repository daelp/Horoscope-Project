/*
 * Horoscope Project - Jasper Adams - 9/26/17
 */


function validateName(x) {
    if (x == "") {
        alert("Please Enter Your Name");
        return false;
    }
}

function validateDate(x, y) {
    if (x == "" || y == "") {
        alert("Invalid Date");
        return false;
    }
    if (y == 2 && (x == 31 || x == 30 || x == 29)) {
        alert("Invalid Date");
        return false;
    }
    if (x == 31 && (y == 9 || x == 4 || x == 6 || x == 11)) {
        alert("Invalid Date");
        return false;
    }
    if (x >= 32 || y >= 13) {
        alert("Invalid Date");
        return false;
    }
}

function determineNum(x, y){
    if((y == 1 && x >= 20) || (y == 2 && x <= 18)){
        return 1; //Aquarius
    }
    if((y == 2 && x >= 219) || (y == 3 && x <= 20)){
        return 2; //Pisces
    }
    if((y == 3 && x >= 21) || (y == 4 && x <= 19)){
        return 3; //Aries
    }
    if((y == 4 && x >= 20) || (y == 5 && x <= 20)){
        return 4; //Taurus
    }
    if((y == 5 && x >= 21) || (y == 6 && x <= 20)){
        return 5; //Gemini
    }
    if((y == 6 && x >= 21) || (y == 7 && x <= 22)){
        return 6; //Cancer
    }
    if((y == 7 && x >= 23) || (y == 8 && x <= 22)){
        return 7; //Leo
    }
    if((y == 8 && x >= 23) || (y == 9 && x <= 22)){
        return 8; //Virgo
    }
    if((y == 9 && x >= 23) || (y == 10 && x <= 22)){
        return 9; //Libra
    }
    if((y == 10 && x >= 23) || (y == 11 && x <= 21)){
        return 10; //Scorpio
    }
    if((y == 11 && x >= 22) || (y == 12 && x <= 21)){
        return 11; //Sagittarius
    }
    if((y == 12 && x >= 22) || (y == 1 && x <= 19)){
        return 12; //Capricorn
    }
}

function determineSign(x, y){
    var a = determineNum(x, y);
    var sign = "";
    if(a == 1) {
        sign = "Aquarius";
    }
    if(a == 2) {
        sign = "Pisces";
    }
    if(a == 3) {
        sign = "Aries";
    }
    if(a == 4) {
        sign = "Taurus";
    }
    if(a == 5) {
        sign = "Gemini";
    }
    if(a == 6) {
        sign = "Cancer";
    }
    if(a == 7) {
        sign = "Leo";
    }
    if(a == 8) {
        sign = "Virgo";
    }
    if(a == 9) {
        sign = "Libra";
    }
    if(a == 10) {
        sign = "Scorpio";
    }
    if(a == 11) {
        sign = "Sagittarius";
    }
    if(a == 12) {
        sign = "Capricorn";
    }
    return sign;
}

function determineImage(x, y){
    var a = determineNum(x, y);
    return "img/" + a + ".jpg"
}

function determineHoroscope(x,y){
    var a = determineNum(x, y);
    var horo = "";
    if(a == 1) {
        horo = "Stick to the script today, because if you cut corners or do things in ways authority " +
            " figures don’t agree with you could find yourself having to do it all over again." +
            "It may be a pain having to play it straight but it’s safer for the time being.";
    }
    if(a == 2) {
        horo = "The more certain people say you can trust them the tighter you should on to your wallet. " +
            " Just because they have a way with words does not mean their words can be trusted and the " +
            " planets warn that what you hear today could be deceptive. ";
    }
    if(a == 3) {
        horo = "Keep your overall goal in mind but don’t be too rigid in your thinking as to how you are going to reach it." +
            " The path that will take you most directly toward your objective is not " +
            " necessarily the best one. The scenic route could be more interesting.";
    }
    if(a == 4) {
        horo = "The planets warn that while you have the power to make things happen you not misuse " +
            "your authority. If you do you may suffer some kind of setback whatever it is you desire today you " +
            "must attain it through fair means only.";
    }
    if(a == 5) {
        horo = "Try not to get so caught up in other people’s worries and woes that you lose sight of the " +
            "fact that the world is still a wonderful place. Steer clear of negative people and situations " +
            "that are unlikely to end in smiles. Always be positive.";
    }
    if(a == 6) {
        horo = "It might be a smart move to keep your thoughts and opinions to yourself today. " +
            " Especially if they go against the grain of what the powers that be regarded as acceptable." +
            " There will be time to speak up but the time is not yet.";
    }
    if(a == 7) {
        horo = "You must make allowances for those who don’t share your drive and determination to get " +
            "things done. The world is full of all kinds of people and each and every one of them has an" +
            "important role to play. Your aims don’t have to be their aims.";
    }
    if(a == 8) {
        horo = "If you are having second thoughts about a plan or project of some kind it could be " +
            " because you are secretly worried that you are not prepared to start on it yet." +
            " In which case just change your timetable. It’s yours after all.";
    }
    if(a == 9) {
        horo = "Too often of late you have wasted time looking back and wondering what might have been," +
            "when what you should have been doing is looking forward and imagining what life will be " +
            " like when all your dreams come true. Change your thinking.";
    }
    if(a == 10) {
        horo = "It’s not like you to be plagued by self-doubt so why are your thoughts up in the air at the moment?" +
            "Whatever the reason you need to snap out of it and get moving again. Any " +
            " direction will do, just so long as you are on the move.";
    }
    if(a == 11) {
        horo = "The more certain people criticize your choices the more you can be sure they are " +
            "the right choices for you. If you encounter opposition today - and you will - it can only be " +
        "because others sense you are going to succeed where they failed.";
    }
    if(a == 12) {
        horo = "No doubt there are many things in the world that need changing but don’t start " +
            "hinking you can  do it all on your own. In fact, you need to get out of the habit of believing you " +
            "have a duty to always get involved. Charity begins at home.";
    }
    return horo;
}

function checkBirthday(x, y){
    var res = "";
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() +1 ;
    if(x == dd && y == mm){
        res = "Happy Birthday! ";
    }
    return res;
}

function onSubmit(){
    var name = document.getElementById("Name").value;
    var d = parseInt(document.getElementById("selectDay").value);
    var m = parseInt(document.getElementById("selectMonth").value);
    validateName(name);
    validateDate(d, m);
    document.getElementById("sign").innerHTML = "Hi " + name + ". " + checkBirthday(d, m) + "Your sign is: " + determineSign(d, m);
    document.getElementById("image").src = determineImage(d, m);
    document.getElementById("horoscope").innerHTML = determineHoroscope(d, m);
}
