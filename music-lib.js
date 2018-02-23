class Library {
  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlists = []
  }
  get _getPlaylists() {
    return console.log(this.playlists)
  }
  set _addPlaylists(playlist) {
    this.playlists.push(playlist)
  }
}

class Playlist {
  constructor(name) {
    this.name = name
    this.tracks = []
  }
  get _getTrack() {
    return console.log(this.tracks)
  }
  set _addTracks(track) {
    this.tracks.push(track)
  }
  get _getOverallRating() {
    let overallRating = 0;
    this.tracks.forEach(function(track) {
      overallRating += track.rating
    })
    return console.log(overallRating/this.tracks.length)
  }
  get _getTotalDuration() {
    let totalDuration = 0;
    this.tracks.forEach(function(track) {
      totalDuration += track.length
    })
    return console.log(totalDuration)
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title
    this.rating = rating
    this.length = length
  }
}


let myLib = new Library("My New Lib", "Romain")
let myPlaylist = new Playlist("Best songs")

let pokerFace = new Track("Poker Face", 5, 200)
let Yo = new Track("What", 3, 300)



myLib._addPlaylists = myPlaylist

myPlaylist._addTracks = pokerFace
myPlaylist._addTracks = Yo
myPlaylist._getTrack
myLib._getPlaylists

myPlaylist._getTotalDuration
myPlaylist._getOverallRating