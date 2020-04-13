import Reactotron, { asyncStorage } from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.16' })
    .useReactNative() // add all built-in react native plugins
    .use(asyncStorage())
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
