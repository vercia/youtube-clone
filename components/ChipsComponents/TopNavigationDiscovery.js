import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { List, Divider } from 'react-native-paper';
import Modal from 'react-native-modal';
import CameraDialog from '../CameraDialog';
import SearchDialog from '../SearchDialog';
import ScreenDialog from '../ScreenDialog';
import { AppContext } from '../AppContext';

const TopNavigationDiscovery = (props) => {
  const [modalScreenVisible, setModalScreenVisible] = useState(false);
  const [modalCameraVisible, setModalCameraVisible] = useState(false);
  const [modalOptionsVisible, setModalOptionsVisible] = useState(false);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const {titleNavigation} = useContext(AppContext)

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginTop: 15
      }}
    >
      <MaterialCommunityIcons
        name='arrow-left'
        size={24}
        color='black'
        style={{ marginLeft: 20 }}
        onPress={props.back}
      />
      <Text>{titleNavigation}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          right: 0,
          position: 'absolute',
          width: '55%'
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
          name='dots-vertical'
          size={28}
          color='black'
          onPress={() => setModalOptionsVisible(!modalOptionsVisible)}
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
          <ScreenDialog
            close={() => setModalScreenVisible(!modalScreenVisible)}
          />
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
            <CameraDialog
              close={() => setModalCameraVisible(!modalCameraVisible)}
            />
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
            <SearchDialog
              close={() => setModalSearchVisible(!modalSearchVisible)}
            />
          </View>
        </Modal>
      </View>

      <View>
        <Modal
          isVisible={modalOptionsVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <List.Section>
              <List.Item
                title='Oglądaj na telewizorze'
                left={() => <List.Icon icon='airplay' />}
              />
              <List.Item
                title='Pomoc i opinie'
                left={() => (
                  <List.Icon color='#000' icon='information-outline' />
                )}
              />
              <Divider />
              <List.Item
                title='Anuluj'
                left={() => <List.Icon color='#000' icon='close' />}
                onPress={() => setModalOptionsVisible(!modalOptionsVisible)}
              />
            </List.Section>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default TopNavigationDiscovery;
