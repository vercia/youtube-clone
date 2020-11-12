import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import VideoCard from './VideoCard';

const CardElement = (props) => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(false);

  const test = () => {
    setVisible(true);
  };

  const fetchData = () => {
    fetch(props.apiAdress)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.items);
      });
  };

  const renderItem = ({ item, index }) => {
    return (
      <VideoCard
        key={item.snippet.title}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        viewCount={item.statistics.viewCount}
        publishedAt={item.snippet.publishedAt.slice(0,10)}
        img={item.snippet.thumbnails.medium.url}
        videoId={item.id}
        tags={item.snippet.tags.slice(0,4)}
      />
    );
  };

  return (
    <View>
      {/* {fetchData()} */}
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default CardElement;
