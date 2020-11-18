import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const Comment = (props) => {
  const arrOfIcons = [
    {
      icon: 'like2',
      text: props.like
    },
    {
      icon: 'dislike2',
      text: 0
    },
    {
      icon: 'filetext1',
      text: props.reply
    }
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 15
      }}
    >
      <Avatar.Image
        size={36}
        source={{ uri: props.avatarImg }}
        style={{ marginLeft: 20 }}
      />
      <View style={{ padding: 10, bottom: 10 }}>
        <Text>
          {props.autorName} · {props.publishedAt}
        </Text>
        <Text style={{ paddingTop: 10, width: 250 }}>{props.textComment}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 8
          }}
        >
          {arrOfIcons.map((item) => {
            return (
              <View
                style={{ alignItems: 'center', flexDirection: 'row' }}
                key={item.icon}
              >
                <AntDesign name={item.icon} size={24} color='black' />
                <Text>{item.text}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Comment;
