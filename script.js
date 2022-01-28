
//CITY BUTTONS
function displayBurbank(){
    alert("Now displaying Burbank");
    document.getElementById("city").innerText = "Burbank"
}

function displayChicago(){
    alert("Now displaying Chicago");
    document.getElementById("city").innerText = "Chicago";
}

function displayDallas(){
    alert("Now displaying Dallas");
    document.getElementById("city").innerText = "Dallas"
}

//BUTTON SHADOWS

function addShadow(element){
    element.classList.add('hover-shadow');
}

function removeShadow(element){
    element.classList.remove('hover-shadow');
}


//COOKIE MESSAGE

function removeCookiesMessage(){
    document.getElementById("cookies").remove();
}

//TEMPERATURE CHANGES

// !! WHEN COMING BACK: YOU NEED TO CREATE A FUNCTION MAP? like we 
// did for lives in the games for each panel that has the highs
// and lows to keep track and traverse through those and mutate
let currentTemp = "celsius";

function changeUnit(element){
    console.log(element.value);
    let newUnit = element.value;
    if(element.value == "celsius"){
        document.getElementById("todayH").innerText =today.hotC +"\u00B0";
        document.getElementById("todayC").innerText =today.coldC +"\u00B0";
        document.getElementById("tomorrowH").innerText =tomorrow.hotC +"\u00B0";
        document.getElementById("tomorrowC").innerText =tomorrow.coldC +"\u00B0";
        document.getElementById("fridayH").innerText =friday.hotC +"\u00B0";
        document.getElementById("fridayC").innerText =friday.coldC +"\u00B0";
        document.getElementById("saturdayH").innerText =saturday.hotC +"\u00B0";
        document.getElementById("saturdayC").innerText =saturday.coldC +"\u00B0";
    } else if(element.value == "fahrenheit"){
        document.getElementById("todayH").innerText =today.hotF +"\u00B0";
        document.getElementById("todayC").innerText =today.coldF +"\u00B0";
        document.getElementById("tomorrowH").innerText =tomorrow.hotF +"\u00B0";
        document.getElementById("tomorrowC").innerText =tomorrow.coldF +"\u00B0";
        document.getElementById("fridayH").innerText =friday.hotF +"\u00B0";
        document.getElementById("fridayC").innerText =friday.coldF +"\u00B0";
        document.getElementById("saturdayH").innerText =saturday.hotF +"\u00B0";
        document.getElementById("saturdayC").innerText =saturday.coldF +"\u00B0";
    } else{
        document.getElementById("todayH").innerText =today.hotK +"\u00B0";
        document.getElementById("todayC").innerText =today.coldK +"\u00B0";
        document.getElementById("tomorrowH").innerText =tomorrow.hotK +"\u00B0";
        document.getElementById("tomorrowC").innerText =tomorrow.coldK +"\u00B0";
        document.getElementById("fridayH").innerText =friday.hotK +"\u00B0";
        document.getElementById("fridayC").innerText =friday.coldK +"\u00B0";
        document.getElementById("saturdayH").innerText =saturday.hotK +"\u00B0";
        document.getElementById("saturdayC").innerText =saturday.coldK +"\u00B0";
    }
}

const today = {
    hotC: 24,
    hotF: celsisusToFahrenheit(24),
    hotK: celsisusToKelvin(24),
    coldC: 18,
    coldF: celsisusToFahrenheit(18), 
    coldK: celsisusToKelvin(18)

};

const tomorrow = {
    hotC: 27,
    hotF: celsisusToFahrenheit(27),
    hotK: celsisusToKelvin(27),
    coldC: 19,
    coldF: celsisusToFahrenheit(19), 
    coldK: celsisusToKelvin(19)
};

const friday = {
    hotC: 21,
    hotF: celsisusToFahrenheit(21),
    hotK: celsisusToKelvin(21),
    coldC: 16,
    coldF: celsisusToFahrenheit(16), 
    coldK: celsisusToKelvin(16)
};

const saturday = {
    hotC: 26,
    hotF: celsisusToFahrenheit(26),
    hotK: celsisusToKelvin(26),
    coldC: 21,
    coldF: celsisusToFahrenheit(21), 
    coldK: celsisusToKelvin(21)
};


function celsisusToFahrenheit(temp){
    return (temp * 9/5) + 32;
}

function celsisusToKelvin(temp){
    return temp + 273;
}


const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () =>{
    navUL.classList.toggle('show');
})