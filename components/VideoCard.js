import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Icon } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';

const VideoCard = (props) => {
  const [visible, setVisible] = useState(false);

  const test = () => {
    setVisible(true);
  };

  const arrOfIcons = [
    {
      icon: 'like2',
      text: '181 tys.'
    },
    {
      icon: 'dislike2',
      text: '181 tys.'
    }
  ];

  return (
    <Card>
      <Card.Cover source={{ uri: props.img }} />
      <Card.Content>
        <Title onPress={test}>{props.title}</Title>
        <Paragraph>
          {props.channelTitle} , {props.viewCount} ,{props.publishedAt}
        </Paragraph>
      </Card.Content>
      <View>
        <Modal
          isVisible={visible}
          style={{
            justifyContent: 'flex-end',
            margin: 0,
            backgroundColor: 'white'
          }}
        >
          <View style={{ flex: 1 }}>
            <YoutubePlayer height={300} play={false} videoId={props.videoId} />
            <Text>{props.tags}</Text>
            <Text>{props.title}</Text>
            <View>
              <Paragraph>
                {props.viewCount} ,{props.publishedAt}
              </Paragraph>
            </View>
            <View style={{ flexDirection: 'row' }}>
              {arrOfIcons.map((item) => {
                return (
                  <View>
                    <AntDesign name={item.icon} size={24} color='black' />
                    <Text>{item.text}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          <StatusBar hidden={true} />
        </Modal>
      </View>
    </Card>
  );
};

export default VideoCard;
