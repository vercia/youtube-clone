import React, { useState,useEffect } from 'react';
import { Text, View, FlatList,Button } from 'react-native';
import { Card, Title, Paragraph, TextInput } from 'react-native-paper';

const KEY = '0AIzaSyAVw7IzucRLzgB5iUfrl_wG51npKD8Sk_U';

// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=${KEY}`

const HomeScreen = () => {
  const [cardData, setCardData] = useState([]);
  const [value, setValue] = useState([]);

  const fetchData = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&chart=mostPopular&maxResults=10&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.items);
      });
  };

  return (
    <View>
      <Button title='kupa' onPress={() => fetchData()}></Button>
      <FlatList
        data={cardData}
        renderItem={({ item }) => {
          return (
            <Card>
              <Card.Cover
                source={{ uri: item.snippet.thumbnails.medium.url }}
              />
              <Card.Content>
                <Title>{item.snippet.title}</Title>
                <Paragraph>
                  {item.snippet.channelTitle} , {item.statistics.viewCount} ,{' '}
                  {item.snippet.publishedAt.slice(0, 10)}
                </Paragraph>
              </Card.Content>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
