import React, { useContext, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Divider, Avatar } from 'react-native-paper';
import Modal from 'react-native-modal';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { AppContext } from '../AppContext';
import Comment from '../Comment';

const VideoComments = (props) => {
  const { modalCommentsVisible, setModalCommentsVisible, KEY } = useContext(
    AppContext
  );
  const [commentData, setCommentData] = useState([]);

  const fetchComment = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=2&order=relevance&videoId=${props.videoId}&key=${KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data.items);
        console.log(commentData);
      });
  };

  return (
    <View style={{ flex: 1 }}>
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
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Komentarze</Text>
            <Text>{props.comments}</Text>
          </View>
          <MaterialCommunityIcons
            name='arrow-up-down'
            size={18}
            color='black'
            style={{ position: 'absolute', right: 0 }}
            onPress={() => {
              setModalCommentsVisible(!modalCommentsVisible), fetchComment();
            }}
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
            source={require('../../images/avatarMusic.jpg')}
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

      <View>
        <Modal
          isVisible={modalCommentsVisible}
          style={{
            justifyContent: 'flex-end',
            margin: 0
          }}
        >
          <View style={{ backgroundColor: 'white' }}>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                width: '50%',
                height: 40,
                top: 20
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: '500' }}>
                Komentarze
              </Text>
              <Text>{props.comments}</Text>
            </View>
            <MaterialCommunityIcons
              name='close'
              size={24}
              color='black'
              style={{ position: 'absolute', right: 20, top: 20 }}
              onPress={() => setModalCommentsVisible(!modalCommentsVisible)}
            />
            <View
              style={{
                flexDirection: 'row',
                padding: 20,
                alignItems: 'center'
              }}
            >
              <Avatar.Image
                size={36}
                source={require('../../images/avatarMusic.jpg')}
              />
              <TextInput
                style={{
                  left: 10,
                  backgroundColor: 'rgba(231,229,229,.8)',
                  width: '80%',
                  paddingLeft: 10,
                  height: 40
                }}
                placeholderTextColor='#222'
                placeholder='Dodaj publiczny komentarz...'
              />
            </View>
            <Divider />
            <View>
              {commentData.map((item) => {
                return (
                  <View
                    key={item.snippet.topLevelComment.snippet.authorDisplayName}
                  >
                    <Comment
                      avatarImg={
                        item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      autorName={
                        item.snippet.topLevelComment.snippet.authorDisplayName
                      }
                      publishedAt={item.snippet.topLevelComment.snippet.publishedAt.slice(
                        0,
                        10
                      )}
                      textComment={
                        item.snippet.topLevelComment.snippet.textDisplay
                      }
                      like={item.snippet.topLevelComment.snippet.likeCount}
                      reply={item.snippet.totalReplyCount}
                    />
                    <Divider />
                  </View>
                );
              })}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default VideoComments;
