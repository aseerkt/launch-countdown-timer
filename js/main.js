const referenceTime = new Date();
const nextWeek = new Date(referenceTime.getTime() + 7 * 24 * 60 * 60 * 1000);

let now = new Date();

let diffTime = nextWeek - now;

let days = Math.floor(diffTime / (24 * 60 * 60 * 1000));
let hours = Math.floor(diffTime / (60 * 60 * 1000)) - days * 24;
let minutes = nextWeek.getMinutes() - now.getMinutes();
let seconds = nextWeek.getSeconds() - now.getSeconds();

console.log(nextWeek);
console.log(days, hours, minutes, seconds);

const daysDiv = document.querySelector('#Days');
const hoursDiv = document.querySelector('#Hours');
const minutesDiv = document.querySelector('#Minutes');
const secondsDiv = document.querySelector('#Seconds');
