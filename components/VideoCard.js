import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Icon } from 'react-native';
import {
  Card,
  Paragraph,
  Title,
  Divider,
  Avatar,
  Button
} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppContext } from './AppContext';

const VideoCard = (props) => {
  const [visible, setVisible] = useState(false);
  const [channelData, setChannelData] = useState([]);
  const { KEY, renderCount } = useContext(AppContext);

  const fetchChannels = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${props.channelTitle}&maxResults=5&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setChannelData(data.items);
      });
  };

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
    <Card onPress={() => setVisible(true)}>
      {/* {visible === true ? fetchChannels() : false} */}
      <Card.Cover source={{ uri: props.img }} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>
          {props.channelTitle} · {props.viewCount} · {props.publishedAt}
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
            <YoutubePlayer height={220} play={false} videoId={props.videoId} />
            <Text style={{ color: 'blue' }}>#{props.tags.join(' #')}</Text>
            <Text style={{ fontSize: 18, width: '90%' }}>{props.title}</Text>
            <Paragraph>
              {props.viewCount} · {props.publishedAt}
            </Paragraph>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
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
            {channelData.map((item) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 15,
                    alignItems: 'center'
                  }}
                >
                  <Avatar.Image
                    size={40}
                    source={{ uri: item.snippet.thumbnails.default.url }}
                  />
                  <View style={{ left: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                      {props.channelTitle}
                    </Text>
                    <Text>
                      {renderCount(item.statistics.subscriberCount)} subskrypcji
                    </Text>
                  </View>
                  <Button
                    color='red'
                    labelStyle={{ fontWeight: 'bold' }}
                    style={{ right: 0, position: 'absolute' }}
                  >
                    SUBSKRYBUJ
                  </Button>
                </View>
              );
            })}
            <Divider />
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
                  <Text style={{ fontSize: 14, fontWeight: '500' }}>
                    Komentarze
                  </Text>
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
                  source={require('../images/avatarMusic.jpg')}
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
          <StatusBar hidden={true} />
        </Modal>
      </View>
    </Card>
  );
};

export default VideoCard;
