var playlist = {workoutSongs:'Jason Favs'
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
