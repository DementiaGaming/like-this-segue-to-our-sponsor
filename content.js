let time = Math.floor(Math.random() * 35400) + 1;
let chance = Number(localStorage.getItem('inputValue')) || 10;
let random = Math.floor(Math.random() * 2) + 1;
console.log('Chance:', chance);
console.log('Random:', random);
if (random == 1) {
    window.location.replace(`https://youtu.be/qy4ehIfEj8I?si=MJ96nzok1dJKZMkv?t=${time}s`);
}