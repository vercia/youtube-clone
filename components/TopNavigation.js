import React, {useState} from 'react';
import { View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { List, Divider } from 'react-native-paper';
import Modal from 'react-native-modal';
import Account from './Account';
import Camera from './Camera'
import Search from './Search'

const TopNavigation = () => {
  const [modalScreenVisible, setModalScreenVisible] = useState(false);
  const [modalCameraVisible, setModalCameraVisible] = useState(false);
  const [modalAccountVisible, setModalAccountVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginTop: 15
      }}
    >
      <Image
        source={require('../images/logo.png')}
        resizeMode='contain'
        style={{ height: 30, width: '40%', left: 0 }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          right: 0,
          position: 'absolute',
          width: '60%'
        }}
      >
        <MaterialCommunityIcons
          name='monitor-screenshot'
          size={28}
          color='black'
          onPress={() => setModalScreenVisible(!modalScreenVisible)}
        />
        <MaterialCommunityIcons
          name='camera-outline'
          size={28}
          color='black'
          onPress={() => setModalCameraVisible(!modalCameraVisible)}
        />
        <MaterialCommunityIcons
          name='search-web'
          size={28}
          color='black'
          onPress={() => setModalSearchVisible(!modalSearchVisible)}
        />
        <MaterialCommunityIcons
          name='account-circle'
          size={28}
          color='black'
          onPress={() => setModalAccountVisible(!modalAccountVisible)}
        />
      </View>
      <View>
        <Modal
          isVisible={modalScreenVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <List.Section>
              <List.Subheader>Połącz się z urządzeniem:</List.Subheader>
              <List.Item
                title='AirPlay & Bluetooth devices'
                left={() => <List.Icon icon='airplay' />}
              />
              <List.Item
                title='Połącz za pomocą kodu z telewizora'
                left={() => <List.Icon color='#000' icon='television-play' />}
              />
              <List.Item
                title='Więcej informacji'
                left={() => (
                  <List.Icon color='#000' icon='information-outline' />
                )}
              />
              <Divider />
              <List.Item
                title='Anuluj'
                left={() => <List.Icon color='#000' icon='close' />}
                onPress={() => setModalScreenVisible(!modalScreenVisible)}
              />
            </List.Section>
          </View>
        </Modal>
      </View>

      <View>
        <Modal
          isVisible={modalAccountVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Account
              close={() => setModalAccountVisible(!modalAccountVisible)}
            />
          </View>
        </Modal>
      </View>

      <View>
        <Modal
          isVisible={modalCameraVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: '#222', flex: 1 }}>
            <Camera close={() => setModalCameraVisible(!modalCameraVisible)} />
          </View>
        </Modal>
      </View>

      <View>
        <Modal
          isVisible={modalSearchVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Search close={() => setModalSearchVisible(!modalSearchVisible)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default TopNavigation;
