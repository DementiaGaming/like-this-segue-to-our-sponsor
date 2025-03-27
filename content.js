let time = Math.floor(Math.random() * 35400) + 1;
let chance = localStorage.getItem('inputValue') ? localStorage.getItem('inputValue') : 10;
let random = Math.floor(Math.random() * chance) + 1;

if (random == 1) {
    window.location.replace(`https://youtu.be/qy4ehIfEj8I?si=MJ96nzok1dJKZMkv?t=${time}s`);
}