import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
import { Feather } from '@expo/vector-icons';
import { AppContext } from '../AppContext';
import VideoInfoSearch from './VideoInfoSearch';

const VideoCardSearch = (props) => {
  const [visible, setVisible] = useState(false);
  const [channelData, setChannelData] = useState([]);
  const [infoData, setInfoData] = useState([]);
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

  const fetchSearchVideo = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${props.videoId}&maxResults=2&regionCode=PL&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setInfoData(data.items);
      });
  };

  useEffect(() => {
    fetchSearchVideo();
  });

  return (
    <Card onPress={() => setVisible(true)}>
      {/* {visible === true ? fetchChannels() : false} */}
      <Card.Cover source={{ uri: props.img }} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>
          {props.channelTitle} · {props.publishedAt}
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
          onSwipeComplete={() => setVisible(false)}
          swipeDirection={['down']}
        >
          <View style={{ flex: 1 }}>
            <Feather
              name='arrow-down-circle'
              size={24}
              color='white'
              style={{ position: 'absolute', top: 10, zIndex: 10, left: 10 }}
              onPress={() => setVisible(false)}
            />
            <ScrollView>
              <YoutubePlayer height={220} play={true} videoId={props.videoId} />
              {/* {infoData.map((item) => {
                return (
                  <VideoInfoSearch
                    key={item.snippet.title}
                    title={item.snippet.title}
                    id={item.id}
                    tags={item.snippet.tags}
                    viewCount={renderCount(item.statistics.viewCount)}
                    publishedAt={item.snippet.publishedAt.slice(0, 10)}
                    like={renderCount(item.statistics.likeCount)}
                    dislike={renderCount(item.statistics.dislikeCount)}
                  />
                );
              })} */}
              {channelData.map((item) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 15,
                      alignItems: 'center'
                    }}
                    key={props.channelTitle}
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
                        {renderCount(item.statistics.subscriberCount)}{' '}
                        subskrypcji
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
              {/* <VideoComments comments={props.comments} /> */}
            </ScrollView>
          </View>
          <StatusBar hidden={true} />
        </Modal>
      </View>
    </Card>
  );
};

export default VideoCardSearch;
