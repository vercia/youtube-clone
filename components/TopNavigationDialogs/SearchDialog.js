import React, { useState, useContext } from 'react';
import { View, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../AppContext';

const SearchDialog = ({ navigation }) => {
  const { setModalSearchVisible, searchQuery,setSearchQuery, fetchSearch } = useContext(AppContext);

  return (
    <View
      style={{
        marginTop: 20
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <MaterialCommunityIcons
          name='arrow-left'
          size={24}
          color='black'
          style={{ marginLeft: 20 }}
          onPress={() => setModalSearchVisible(false)}
        />
        <TextInput
          placeholder='Szukaj w YouTube'
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
          style={{ width: '80%', height: 50, fontSize: 20, paddingLeft: 10 }}
          returnKeyType='search'
          autoFocus={true}
          onSubmitEditing={() => {navigation.navigate('SearchScreen'), fetchSearch()}}
        />
      </View>
      <Divider />
    </View>
  );
};

export default SearchDialog;
