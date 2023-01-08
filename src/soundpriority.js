// --- SOUND RELEVANCE (highest to lowest, separated by phase) ---

// lower number = higher volume priority
// volume = 1 / priority
const COUNTDOWN_SOUNDS = {
  countdownsound: 1,
  hitgroundsound: 1.5,
  fallsound: 1.5,
};
const ROUND_SOUNDS = {
  explosion: 2,
  blipsound: 1,
  doorsound: 2,
  buttonsound: 1.5,
  jump: 1.5,
  groundedsound: 1.6,
};
const VICTORY_SOUNDS = {
  win: 1,
  menusound: 1.2,
};
const MUSIC_SOUNDS = {
  button_game_150: 2,
  button_game_170: 2,
  button_game_190: 2,
};

const SOUND_COLLECTIONS = [
  COUNTDOWN_SOUNDS,
  ROUND_SOUNDS,
  VICTORY_SOUNDS,
  MUSIC_SOUNDS,
];

const MUSIC_MAP = {
  button_game_150: 0,
  button_game_170: 1,
  button_game_190: 2,
};
