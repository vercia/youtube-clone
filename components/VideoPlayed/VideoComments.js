import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Divider, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VideoComments = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              width: '40%'
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Komentarze</Text>
            <Text>{props.comments}</Text>
          </View>
          <MaterialCommunityIcons
            name='arrow-up-down'
            size={18}
            color='black'
            style={{ position: 'absolute', right: 0 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center'
          }}
        >
          <Avatar.Image
            size={25}
            source={require('../../images/avatarMusic.jpg')}
          />
          <TextInput
            style={{
              left: 10,
              backgroundColor: 'rgba(231,229,229,.8)',
              width: '80%',
              paddingLeft: 10,
              height: 30
            }}
            placeholder='Dodaj publiczny komentarz...'
          />
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default VideoComments;
