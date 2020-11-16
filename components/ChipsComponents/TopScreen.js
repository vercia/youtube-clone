import React, { useContext } from 'react';
import { View } from 'react-native';
import TopNavigationDiscovery from './TopNavigationDiscovery';
import CardElement from '../CardElement';
import { AppContext } from '../AppContext';

const TopScreen = ({ navigation }) => {
  const { KEY, setCardData, cardData } = useContext(AppContext);

  return (
           <View>
             <TopNavigationDiscovery
               back={() => navigation.navigate('Odkrywaj')}
             />
             <CardElement
               apiAdress={`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=PL&key=${KEY}`}
        setState={setCardData}
        state={cardData}
             />
           </View>
         );
};

export default TopScreen;
