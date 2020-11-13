import React, {useState} from 'react';
import { View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import AccountDialog from './TopNavigationDialogs/AccountDialog';
import CameraDialog from './TopNavigationDialogs/CameraDialog';
import SearchDialog from './TopNavigationDialogs/SearchDialog';
import ScreenDialog from './TopNavigationDialogs/ScreenDialog';
import SearchStack from './SearchStack';

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
        style={{ height: 25, width: '40%', left: 0 }}
      />
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
          name='video-outline'
          size={28}
          color='black'
          onPress={() => setModalCameraVisible(!modalCameraVisible)}
        />
        <MaterialCommunityIcons
          name='magnify'
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
          <ScreenDialog
            close={() => setModalScreenVisible(!modalScreenVisible)}
          />
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
            <AccountDialog
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
            {/* <SearchDialog
              close={() => setModalSearchVisible(!modalSearchVisible)}
            /> */}
            <SearchStack />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default TopNavigation;
