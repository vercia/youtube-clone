import React from 'react';
import { View, Image, Text } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

const ProfileDiscovery = (props) => {
  return (
    <View>
      <Image source={props.bannerImg} style={{ width: '100%', height: 100 }} />
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Avatar.Image size={80} source={props.avatarImg} />
        <View style={{ left: 15, alignItems: 'flex-start', top: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 3 }}>
            {props.title}
          </Text>
          <Text>{props.subtitle}</Text>
          <Button
            color='red'
            style={{ right: 15 }}
            labelStyle={{ fontWeight: 'bold' }}
          >
            SUBSKRYBUJ
          </Button>
        </View>
      </View>
      <Text style={{ fontSize: 16, padding: 15 }}>{props.headerText}</Text>
    </View>
  );
};

export default ProfileDiscovery;
