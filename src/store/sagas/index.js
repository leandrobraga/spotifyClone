import { all, takeLatest } from 'redux-saga/effects';

import { PodcastTypes } from '../ducks/podcast';
import { load } from './podcast';

import { PlayerTypes } from '../ducks/player';
import {
  init,
  setPodcast,
  play,
  pause,
  prev,
  next,
} from './player';

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(PodcastTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.PREV, prev),
    takeLatest(PlayerTypes.NEXT, next),
  ]);
}
