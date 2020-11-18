import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import VideoCard from './VideoPlayed/VideoCard';
import { AppContext } from './AppContext';
import { ScrollView } from 'react-native-gesture-handler';

const CardElement = (props) => {
  const { renderCount } = useContext(AppContext);

  const fetchData = () => {
    fetch(props.apiAdress)
      .then((res) => res.json())
      .then((data,) => {
        props.setState(data.items);
        console.log(data);
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
        tags={item.snippet.tags ? item.snippet.tags.slice(0, 4) : false}
        like={renderCount(item.statistics.likeCount)}
        dislike={renderCount(item.statistics.dislikeCount)}
        comments={renderCount(item.statistics.commentCount)}
      />
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
    <ScrollView>
      {props.state.map(item => {
        return <VideoCard
          key={item.snippet.title}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
          viewCount={renderCount(item.statistics.viewCount)}
          publishedAt={item.snippet.publishedAt.slice(0, 10)}
          img={item.snippet.thumbnails.medium.url}
          videoId={item.id}
          tags={item.snippet.tags ? item.snippet.tags.slice(0, 4) : false}
          like={renderCount(item.statistics.likeCount)}
          dislike={renderCount(item.statistics.dislikeCount)}
          comments={renderCount(item.statistics.commentCount)}
        />
      })}
    </ScrollView>
    </View>
  );
};

export default CardElement;
