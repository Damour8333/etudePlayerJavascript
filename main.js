// selectionner les variables
// details de la musique
let now_playing=document.querySelector(".now-playing")
console.log(now_playing);
let track_art=document.querySelector(".track-art");
console.log(track_art);
let track_name=document.querySelector(".track-name");
console.log(track_name);

// bouton
let prev_track=document.querySelector(".prev-track");
console.log(prev_track);
let next_track=document.querySelector(".next-track");
console.log(next_track);
let playpause_track=document.querySelector(".playpause-track");
console.log(playpause_track);

// slider container time
let current_time=document.querySelector(".current-time");
console.log(current_time);
let seek_slider=document.querySelector(".seek_slider");
console.log(seek_slider);
let total_duration=document.querySelector(".total-duration");
console.log(total_duration);
// slider container volume
let volume_slider=document.querySelector(".volume_slider");
console.log(volume_slider);

let track_index=0;
let isPlaying=false;
let updateTimer;



