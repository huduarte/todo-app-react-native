import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../../components/header/Header';

const Main = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Header headerTitle="ToDo App" />
    </SafeAreaView>
  )
};

export default Main;