//////////////////////////////
// User defined and literal type guards
//////////////////////////////

class Song {
  // Assigning string literal 'song' instead of string type
  type: 'song';
  constructor(
    public title: string,
    public length: number
  ) {
    this.type = 'song';
  }
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
  // return item instanceof Song;
  // or
  return 'title' in item;
}

function getItemName(item: Song | PlayList) {
  // if (isSong(item)) {
  // or
  if (item.type === 'song') {
    return item.title;
  }
  return item.name;
}

const song = new Song('Wonderful tonight', 2000);
const myPlaylist = new PlayList('My Misc', [song]);

console.log(isSong(song), isSong(myPlaylist));
// Output: true false
