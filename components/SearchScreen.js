import React, {useState,useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CardSearch from './CardSearch';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import ScreenDialog from './TopNavigationDialogs/ScreenDialog';
import {AppContext} from './AppContext'

const SearchScreen = ({navigation}) => {
  const [modalScreenVisible, setModalScreenVisible] = useState(false);

  const { setModalSearchVisible, searchQuery, setSearchQuery } = useContext(
    AppContext
  );

  return (
    <View>
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
          onPress={() => {setModalSearchVisible(false), setSearchQuery('')}}
        />
        <TouchableOpacity onPress={() => navigation.goBack()} style={{width:150}}>
          <Text style={{ left: 8, fontSize: 16 }}>{searchQuery}</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            right: 10,
            position: 'absolute',
            width: '25%'
          }}
        >
          <MaterialCommunityIcons
            name='close'
            size={28}
            color='black'
            onPress={() => { navigation.goBack(), setSearchQuery('')}}
          />
          <MaterialCommunityIcons
            name='monitor-screenshot'
            size={28}
            color='black'
            onPress={() => setModalScreenVisible(!modalScreenVisible)}
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
      </View>
      <CardSearch />
    </View>
  );
};

export default SearchScreen;
