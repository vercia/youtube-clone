import React from 'react';
import { View, Text } from 'react-native';
import { Paragraph, Divider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const VideoInfo = (props) => {
  const arrOfIcons = [
    {
      icon: 'like2',
      text: props.like
    },
    {
      icon: 'dislike2',
      text: props.dislike
    },
    {
      icon: 'sharealt',
      text: 'Udostępnij'
    },
    {
      icon: 'download',
      text: 'Pobierz'
    },
    {
      icon: 'save',
      text: 'Zapisz'
    }
  ];

  return (
    <View>
      <View style={{ left: 10 }}>
        <Text style={{ color: 'blue', padding: 5 }}>
          #{props.tags.join(' #')}
        </Text>
        <Text style={{ fontSize: 18, width: '90%', padding: 5 }}>
          {props.title}
        </Text>
        <Paragraph style={{ paddingLeft: 5 }}>
          {props.viewCount} · {props.publishedAt}
        </Paragraph>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 8
        }}
      >
        {arrOfIcons.map((item) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <AntDesign name={item.icon} size={24} color='black' />
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </View>
      <Divider style={{ marginTop: 10 }} />
    </View>
  );
};

export default VideoInfo;
