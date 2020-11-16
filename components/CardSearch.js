import React, { useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import VideoCardSearch from './VideoSearchPlayed/VideoCardSearch';
import { AppContext } from './AppContext';

const CardSearch = (props) => {
  const [idData, setIdData] = useState([]);
  const { renderCount, searchData, KEY } = useContext(AppContext);


  const renderItem = ({ item, index }) => {
    return (
      <VideoCardSearch
        key={item.snippet.title}
        title={item.snippet.title}
        channelTitle={item.snippet.channelTitle}
        // viewCount={renderCount(item.statistics.viewCount)}
        videoId={item.id.videoId}
        img={item.snippet.thumbnails.medium.url}
        publishedAt={item.snippet.publishedAt.slice(0, 10)}
      />
    );
  };

  return (
    <View>
      {/* {fetchData()} */}
      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

export default CardSearch;
