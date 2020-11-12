import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Divider, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountDialog = (props) => {
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ flexDirection: 'row', left: 10 }}>
        <MaterialCommunityIcons
          name='close'
          size={24}
          color='black'
          onPress={props.close}
        />
        <Text style={{fontSize: 18, left: 5}}>Konto</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: '60%'
        }}
      >
        <Image
          style={styles.tinyLogo}
          source={require('../images/login.png')}
        />
        <View
          style={{
            alignItems: 'center',
            width: '90%',
            marginTop: 40
          }}
        >
          <Text
            style={{
              textAlign: 'center'
            }}
          >
            Zaloguj się, aby przesyłać i zapisywać filmy oraz dodawać
            komentarze.
          </Text>
          <Button
            mode='contained'
            onPress={() => console.log('Pressed')}
            style={{ marginTop: 20 }}
          >
            ZALOGUJ SIĘ
          </Button>
        </View>
      </View>
      <Divider style={{ marginBottom: '5%' }} />
      <View style={{ height: '40%' }}>
        <List.Item
          title='Ustawienia'
          left={() => (
            <MaterialCommunityIcons
              name='settings-outline'
              size={24}
              color='black'
            />
          )}
          style={{ left: 10, padding: 15 }}
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
          style={{ left: 10, padding: 15 }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20
          }}
        >
          <Text>Polityka prywatności</Text>
          <Text>Warunki usługi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 250,
    height: 250,
    borderRadius: 100
  }
});

export default AccountDialog;
