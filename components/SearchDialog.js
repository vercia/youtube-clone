import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Divider} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SearchDialog = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

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
          onPress={props.close}
        />
        <TextInput
          placeholder='Szukaj w YouTube'
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{ width: '80%', height: 50, fontSize: 20, paddingLeft: 10 }}
          returnKeyType='search'
          autoFocus={true}
        />
      </View>
      <Divider />
    </View>
  );
};

export default SearchDialog;
