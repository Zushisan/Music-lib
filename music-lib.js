class Library {
  constructor(name, creator) {
    this._name = name
    this._creator = creator
    this._playlists = []
  }
  get getPlaylists() {
    return console.log(this._playlists)
  }
  set addPlaylists(playlist) {
    this._playlists.push(playlist)
  }
}

class Playlist {
  constructor(name) {
    this._name = name
    this._tracks = []
  }
  get getTrack() {
    return console.log(this._tracks)
  }
  set addTracks(track) {
    this._tracks.push(track)
  }
  get getOverallRating() {
    let overallRating = 0;
    this._tracks.forEach(function(track) {
      overallRating += track._rating
    })
    return console.log(overallRating/this._tracks._length)
  }
  get getTotalDuration() {
    let totalDuration = 0;
    this._tracks.forEach(function(track) {
      totalDuration += track._length
    })
    return console.log(totalDuration)
  }
}

class Track {
  constructor(title, rating, length){
    this._title = title
    this._rating = rating
    this._length = length
  }
}


let myLib = new Library("My New Lib", "Romain")
let myPlaylist = new Playlist("Best songs")

let pokerFace = new Track("Poker Face", 5, 200)
let Yo = new Track("What", 3, 300)



myLib.addPlaylists = myPlaylist

myPlaylist.addTracks = pokerFace
myPlaylist.addTracks = Yo
myPlaylist.getTrack
myLib.getPlaylists

myPlaylist.getTotalDuration
myPlaylist.getOverallRating