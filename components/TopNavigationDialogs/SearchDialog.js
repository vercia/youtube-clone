import React, { useState, useContext } from 'react';
import { View, TextInput } from 'react-native';
import { Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from '../AppContext';

const SearchDialog = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {setModalSearchVisible} = useContext(AppContext)

  const onChangeSearch = (query) => setSearchQuery(query);

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
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ width: '80%', height: 50, fontSize: 20, paddingLeft: 10 }}
          returnKeyType='search'
          autoFocus={true}
          onSubmitEditing={() => navigation.navigate('Test')}
        />
      </View>
      <Divider />
    </View>
  );
};

export default SearchDialog;
