import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

const CardElement = (props) => {
  const [cardData, setCardData] = useState([]);

  const fetchData = () => {
    fetch(
      props.apiAdress
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.items);
      });
  };

  return (
    <View>
      {/* {fetchData()} */}
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
                  {item.snippet.channelTitle} , {item.statistics.viewCount} ,
                  {item.snippet.publishedAt.slice(0, 10)}
                </Paragraph>
              </Card.Content>
            </Card>
          );
        }}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default CardElement;
