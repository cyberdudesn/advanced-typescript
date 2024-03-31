interface Music {
  type: string;
}

class Song implements Music {
  // Assigning string literal 'song' instead of string type
  type: 'song';
  constructor(
    public title: string,
    public length: number
  ) {
    this.type = 'song';
  }
  play() {}
}

class PlayList {
  type: 'playlist';
  constructor(
    public name: string,
    public songs: Song[]
  ) {
    this.type = 'playlist';
  }

  method() {}
}

// Infers or supplies type information (Song) of object (item),
// Only works if the function returns boolean type
function isSong(item: any): item is Song {
  return 'title' in item;
}

function isSongBoolean(item: any): boolean {
  return 'title' in item;
}

const song = new Song('Wonderful tonight', 2000);
const myPlaylist = new PlayList('My Misc', [song]);
const newSong: Music = {
  type: 'song',
};

console.log(isSong(song), isSong(myPlaylist));
// Output: true false

if (isSongBoolean(newSong)) {
  // Error: Property 'play' does not exist on type Music
  // newSong.play()
}

if (isSong(newSong)) {
  // Allowed
  newSong.play();
}
