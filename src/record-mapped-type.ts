let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
  current: string;
  next: string;
}

const newTrack: Record<keyof TrackStates, string> = {
  current: 'fmn342',
  next: 'gmf342',
};

dictionary['first'] = newTrack;
// or
// dictionary[0] = newTrack;
// JS converts 0 to string i.e. '0'
