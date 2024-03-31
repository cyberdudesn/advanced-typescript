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

function getItemName(item: Song | PlayList) {
  if (item.type === 'song') {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Stairway to heaven', 4));
console.log(songName);
// Output: 'Stairway to heaven'
const playlistName = getItemName(new PlayList('Led Zeppelin', []));
console.log(playlistName);
// Output: 'Led Zeppelin'
