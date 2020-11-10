import React from 'react';
import { Text, View } from 'react-native';
import MultiScreen from './MultiScreen';

const LibraryScreen = () => {
  return (
    <View>
      <MultiScreen
        title={'Oglądaj ulubione filmy'}
        subtitle={
          'Zaloguj się, aby mieć dostęp do zapisanych i lubianych filmów'
        }
        button={'ZALOGUJ SIĘ'}
        icon={'folder'}
      />
    </View>
  );
};

export default LibraryScreen;
