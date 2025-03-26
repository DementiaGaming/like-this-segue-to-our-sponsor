let random = Math.floor(Math.random() * 1) + 1;
let time = Math.floor(Math.random() * 35400) + 1;
let audio = new Audio("audio/segway.mp3");
if (random == 10) {
    audio.play();
    window.location.replace(`https://youtu.be/qy4ehIfEj8I?si=MJ96nzok1dJKZMkv?t=${time}s`);
}