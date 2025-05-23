import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  </Provider>
);

export default App;
