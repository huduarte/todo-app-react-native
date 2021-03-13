import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
      <SafeAreaView>
        <Text style={styles.text}>Hello World!</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  }
});

export default App;
