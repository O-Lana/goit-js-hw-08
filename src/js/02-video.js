
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";


function onPlayTime({seconds}) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);

};

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function (time) {
    time = 0;
}).catch(function (error) {
        console.log(error);
    });

player.on('timeupdate', throttle(onPlayTime, 1000));