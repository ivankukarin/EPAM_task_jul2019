'use strict'
let now = new Date();

function checkData(data) {
    let now = new Date();
    let date = new Date(data);
    let checkYear = (date.getFullYear() === now.getFullYear());
    let checkMonths = (date.getMonth() === now.getMonth());
    let checkDays = (date.getDate() - now.getDate());

  return ((checkYear && checkMonths) && ( checkDays === 0)) ;
    
}

function formatDate (data) {
  let date = new Date(data);
  function getMonths(date){
    let i = date.getMonth();
    const monthsArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return monthsArr[i]
  }
  let formDate = (`${ date.getDate() } ${ getMonths(date) }`);
  return formDate;
}


// 1564491000000

let weatherJul2019 = [
    {
      date: 1564491000000,
      temperature: { night: 16, day: 26,},
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      date: 1559505600000,
      temperature: {
        night: 19,
        day: 29,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
    {
      date: 1559592000000,
      temperature: {
        night: 12,
        day: 21,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: false,
    },
];


const imgClear = "/img/clear.png";
const imgRain = "/img/rain.jpg";
const imgSnow = "/img/snow.jpg";
const imgCloud = "/img/cloud.png";
const imgRainSnow = "/img/rainSnow.jpg";

let today = document.getElementsByClassName("today");

let day = today[0].getElementsByClassName("day");
let date = today[0].getElementsByClassName("date");
let img = today[0].getElementsByTagName("img");
let dayTemperature = today[0].getElementsByClassName("day-temperature");
let nightTemperature = today[0].getElementsByClassName("night-temperature");
let rainfallDescript = today[0].getElementsByClassName("rainfall-descript");

console.log(img)
// day.innerText = checkData(data)?"Сегодня":'Не сегодня';
// date[0].innerHTML = formatDate(data);
img


// const refreshForecast = function (parentClass, currentClass, yourText) {
//   let elem = document.querySelector(parentClass).querySelector(currentClass);
//   elem.textContent = yourText;
//   };

// refreshForecast('today', 'night-temperature', 'Вот такие осадки');