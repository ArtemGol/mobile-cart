/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {store} from './src/store';
import React from 'react';
import {StatusBar} from 'react-native';

import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {colors} from './assets/colors/colors';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.black} />
      <Navigation />
    </Provider>
  );
};

export default App;
