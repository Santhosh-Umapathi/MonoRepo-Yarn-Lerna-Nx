import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {DisplayResults} from '@monorepo/common';
import {Button} from '@monorepo/components';
import {WelcomeScreen} from '@monorepo/screens';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>Mobile App</Text>
      <Button title="Mobile Button" onPress={() => {}} />
      <Text>{DisplayResults()}</Text>
      <WelcomeScreen text="Sub module" />
    </SafeAreaView>
  );
};

export default App;
