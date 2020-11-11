import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from './DiscoverScreen';
import TopScreen from './ChipsComponents/TopScreen'
import MusicScreen from './ChipsComponents/MusicScreen';
import GamesScreen from './ChipsComponents/GamesScreen';
import NewsScreen from './ChipsComponents/NewsScreen';
import LiveScreen from './ChipsComponents/LiveScreen';

const Stack = createStackNavigator();

const DiscoverStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Odkrywaj' component={DiscoverScreen} />
            <Stack.Screen name='Na czasie' component={TopScreen} />
            <Stack.Screen name='Gry' component={GamesScreen} />
            <Stack.Screen name='Muzyka' component={MusicScreen} />
            <Stack.Screen name='Na żywo' component={LiveScreen} />
            <Stack.Screen name='Wiadomości' component={NewsScreen} />
        </Stack.Navigator>
    );
}

export default DiscoverStack