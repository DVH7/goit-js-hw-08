import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VPLAYER_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (evt) {
  localStorage.setItem(VPLAYER_KEY, evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VPLAYER_KEY)) || 0);