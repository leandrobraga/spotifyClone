import { combineReducers } from 'redux';

import { reducer as podcast } from './podcast';
import { reducer as player } from './player';

export default combineReducers({
  podcast,
  player,
});
