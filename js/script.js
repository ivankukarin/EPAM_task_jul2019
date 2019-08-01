"use strict";

let weatherJul2019 = [
  {
    date: 1564637264603,
    temperature: { night: 16, day: 26 },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564723664603,
    temperature: {
      night: 19,
      day: 29
    },
    cloudiness: "Облачно",
    snow: false,
    rain: true
  },
  {
    date: 1564810064603,
    temperature: {
      night: 12,
      day: 41
    },
    cloudiness: "Ясно",
    snow: false,
    rain: false
  },
  {
    date: 1564896464603,
    temperature: {
      night: 12,
      day: 21
    },
    cloudiness: "Облачно",
    snow: false,
    rain: false
  },
  {
    date: 1564982864603,
    temperature: {
      night: 12,
      day: 21
    },
    cloudiness: "Облачно",
    snow: true,
    rain: true
  }
];

let now = new Date();

const imgClear = "/img/clear.png";
const imgRain = "/img/rain.jpg";
const imgSnow = "/img/snow.jpg";
const imgCloud = "/img/cloud.png";
const imgRainSnow = "/img/rainSnow.jpg";

function checkData(data) {
  let now = new Date();
  let date = new Date(data);
  let checkYear = date.getFullYear() === now.getFullYear();
  let checkMonths = date.getMonth() === now.getMonth();
  let checkDays = date.getDate() - now.getDate();

  return checkYear && checkMonths && checkDays === 0;
}

// console.log(checkData(1564723664603, 1));

function formatDate(data) {
  let date = new Date(data);
  function getMonths(date) {
    let i = date.getMonth();
    const monthsArr = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря"
    ];
    return monthsArr[i];
  }
  let formDate = `${date.getDate()} ${getMonths(date)}`;
  return formDate;
}

function getDayOfWeek(anyDay) {
  const arrDaysOfWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  let date = new Date(anyDay);
  let numberDay = date.getDay();
  return arrDaysOfWeek[numberDay];
}

function getRainfallDescript(data) {
  let cloudiness = data.cloudiness;
  let rainfall = data => {
    if (data.rain === true && data.snow === true) {
      return "снег с дождем";
    } else if (data.rain === true && data.snow === false) {
      return "дождь";
    } else if (data.rain === false && data.snow === true) {
      return "снег";
    } else if (data.rain === false && data.snow === false) {
      return "без осадков";
    }
  };

  let result = `${cloudiness}, \n ${rainfall(data)}`;
  return result;
}

function rainfallImg(data) {
  if (data.rain === true && data.snow === true) {
    return imgRainSnow;
  } else if (data.rain === true && data.snow === false) {
    return imgRain;
  } else if (data.rain === false && data.snow === true) {
    return imgSnow;
  } else if (data.rain === false && data.snow === false) {
    if (data.cloudiness === "Облачно") {
      return imgCloud;
    } else {
      return imgClear;
    }
  }
}

const today = document.querySelector(".today");
const nextDay = document.querySelector(".next-day");
const secondDay = document.querySelector(".second-day");
const thirdDay = document.querySelector(".third-day");

const arrDays = [today, nextDay, secondDay, thirdDay];

// let index = array.find(x => checkData(x.date, 0));

function applyWeather(array, index, currentDay) {
  let day = currentDay.querySelector(".day");
  let date = currentDay.querySelector(".date");
  let img = currentDay.querySelector("img");
  let dayTemperature = currentDay.querySelector(".day-temperature");
  let nightTemperature = currentDay.querySelector(".night-temperature");
  let rainfallDescript = currentDay.querySelector(".rainfall-descript");

  day.innerText = checkData(array[index].date)
    ? "Сегодня"
    : getDayOfWeek(array[index].date);
  date.innerText = formatDate(array[index].date);
  img.setAttribute("src", rainfallImg(array[index]));
  dayTemperature.innerText = `днем +${array[index].temperature.day}°`;
  nightTemperature.innerText = `ночью +${array[index].temperature.night}°`;
  rainfallDescript.innerText = getRainfallDescript(array[index]);
}

let dateTodayHeader = document.querySelector(".date-today-header");
dateTodayHeader.innerText = `Самара, ${formatDate(now)}, ${getDayOfWeek(now)}`;

let index = 0;

function setWeather(array, index = 0) {
  index += array.findIndex(x => checkData(x.date));
  for (let i = 0; i <= 3; i++) {
    applyWeather(array, index, arrDays[i]);
    index++;
  }
}

setWeather(weatherJul2019);

let leftArrow = document.querySelector(".left-arrow");
leftArrow.onclick = function() {
  setWeather(weatherJul2019, (index = -1));
};
let rightArrow = document.querySelector(".right-arrow");
rightArrow.onclick = function() {
  setWeather(weatherJul2019, (index = 1));
};
