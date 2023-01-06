const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')

//Play and Pause button
playButton.addEventListener('click', (e) => {
  if(video.paused){
    video.play()
    e.target.textContent = '❚ ❚'
  } else {
    video.pause()
    e.target.textContent = '►'
  }
})

//current time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
}

video.addEventListener('timeupdate', currentTime)



