import React, { useState, useContext } from 'react';
import { View, FlatList } from 'react-native';
import VideoCard from './VideoPlayed/VideoCard';
import { AppContext } from './AppContext';

const VideoCardSearch = (props) => {
    const [cardData, setCardData] = useState([]);
    const { renderCount, searchData } = useContext(AppContext)

    const fetchData = () => {
        fetch(props.apiAdress)
            .then((res) => res.json())
            .then((data) => {
                setCardData(data.items);
                console.log(data)
            });
    };

    const renderItem = ({ item, index }) => {
        return (
          <VideoCard
            key={item.snippet.title}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            // viewCount={renderCount(item.statistics.viewCount)}
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

export default VideoCardSearch;
