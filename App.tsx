import {View, Text} from 'react-native';
import React from 'react';
import MainStack from './routes/app-routes';

import {Provider} from 'react-redux';
import store from './src/app/store';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </View>
  );
}
