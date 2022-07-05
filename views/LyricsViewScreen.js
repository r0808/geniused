import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import configData from "../conf/config.json";

import SongLyricsBlock from '../components/SongLyricsBlock';

const LyricsViewScreen = ({ route, navigation }) => {
  const { trackId } = route.params;

  return (
    <View style={styles.screen}>
      <SongLyricsBlock trackId={trackId} />
      <Pressable style={styles.bottomButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.btnText}>Back to Trending</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomButton: {
    width: 200,
    height: 55,
    borderRadius: 8,
    backgroundColor: 'black',
    marginTop: 15,
    marginBottom: 30,
    padding: 15,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    alignSelf: "center",
    justifyContent: "center"
  }
});
export default LyricsViewScreen;