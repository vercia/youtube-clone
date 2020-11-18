import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import VideoCardSearch from './VideoSearchPlayed/VideoCardSearch';
import { AppContext } from './AppContext';

const CardSearch = () => {
  const { searchData } = useContext(AppContext);


  const renderItem = ({ item, index }) => {
    return (
      <VideoCardSearch
        key={item.snippet.title}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        videoId={item.id.videoId}
        img={item.snippet.thumbnails.medium.url}
        publishedAt={item.snippet.publishedAt.slice(0, 10)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CardSearch;
