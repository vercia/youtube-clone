import React, { useState,useContext } from 'react';
import { View, FlatList } from 'react-native';
import VideoCard from './VideoPlayed/VideoCard';
import { AppContext } from './AppContext';

const CardElement = (props) => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(false);
  const {renderCount} = useContext(AppContext)

  

  const fetchData = () => {
    fetch(props.apiAdress)
      .then((res) => res.json())
      .then((data) => {
        setCardData(data.items);
      });
  };

  const renderItem = ({ item, index }) => {
    return (
      <VideoCard
        key={item.snippet.title}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        viewCount={renderCount(item.statistics.viewCount)}
        publishedAt={item.snippet.publishedAt.slice(0, 10)}
        img={item.snippet.thumbnails.medium.url}
        videoId={item.id}
        tags={item.snippet.tags.slice(0, 4)}
        like={renderCount(item.statistics.likeCount)}
        dislike={renderCount(item.statistics.dislikeCount)}
        comments={renderCount(item.statistics.commentCount)}
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
