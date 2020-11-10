import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Divider, List, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Camera = (props) => {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <MaterialCommunityIcons
        name='close'
        size={30}
        color='white'
        onPress={props.close}
        style={{ left: 20, position: 'absolute', top: 30 }}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '55%'
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require('../images/movie.png')}
        />
          <Text
            style={{
              color: 'white',
              fontSize: 22
            }}
          >
            Rozpocznij seans
          </Text>
          <Text
            style={{
              color: 'white',
              width: '80%',
              textAlign: 'center',
              fontSize: 16
            }}
          >
            Aby rozpocząć, zezwól na dostęp do zdjęć, aparatu i mikrofonu.
          </Text>
        <Button mode='contained' style={{ top: 20 }}>
          ZEZWÓL NA DOSTĘP
        </Button>
        <StatusBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 220,
    height: 220,
    borderRadius: 100,
    backgroundColor: 'blue',
  }
});

export default Camera;
