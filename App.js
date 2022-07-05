import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeChart from './views/HomeChart';
import LyricsViewScreen from './views/LyricsViewScreen';
import SearchTrack from './views/SearchTrack';
import SearchArtist from './views/SearchArtist';
import ArtistViewScreen from './views/ArtistViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeChart} />
        <Stack.Screen name="Lyrics" component={LyricsViewScreen} />
        <Stack.Screen name="Songs" component={SearchTrack} />
        <Stack.Screen name="Artists" component={SearchArtist} />
        <Stack.Screen name="Artist Details" component={ArtistViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}