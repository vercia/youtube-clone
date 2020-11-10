import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Divider, List, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Account = (props) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ flexDirection: 'row' }}>
        <MaterialCommunityIcons name='close' size={24} color='black' onPress={props.close} />
        <Text>Konto</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image
          style={styles.tinyLogo}
          source={require('../images/login.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: 20,
            width: '80%'
          }}
        >
          Zaloguj się, aby przesyłać i zapisywać filmy oraz dodawać komentarze.
        </Text>
        <Button mode='contained' onPress={() => console.log('Pressed')}>
          ZALOGUJ SIĘ
        </Button>
      </View>
      <Divider style={{ marginTop: 20 }} />
      <List.Item
        title='Ustawienia'
        left={() => (
          <MaterialCommunityIcons
            name='settings-outline'
            size={24}
            color='black'
          />
        )}
      />
      <List.Item
        title='Pomoc i opinie'
        left={() => (
          <MaterialCommunityIcons
            name='comment-question-outline'
            size={24}
            color='black'
          />
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>Polityka prywatności</Text>
        <Text>Warunki usługi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'blue',
    marginTop: 20
  }
});

export default Account;
