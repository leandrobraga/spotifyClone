import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import PodcastActions from '../ducks/podcast';

export function* load() {
  try {
    const response = yield call(api.get, 'podcasts');

    yield put(PodcastActions.loadSuccess(response.data));
  } catch (err) {
    yield put(PodcastActions.loadFailure());
  }
}
