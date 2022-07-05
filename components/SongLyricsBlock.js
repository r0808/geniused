import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import {trackLyricURL, apiKey} from './api.js'

const SongLyricsBlock = props => {

  const [songLyrics, setLyrics] = useState({});

  const getSongLyricsById = async () => {
    try {
      const url = encodeURI(trackLyricURL + props.trackId + "&&apikey=6b9d1a81e74cc7ed377c14301f8483f4");
      const response = await fetch(url);
      const json = await response.json();
      const data = json.message.body.lyrics;
      setLyrics(data);
      console.log(url);
      console.log(data);
    }
      catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getSongLyricsById();
  }, []);

  return (
    <ScrollView>
      <View style={styles.lyricsBlock}>
        <Text style={styles.SongLyrics}>{songLyrics.lyrics_body}</Text>
        <Text style={styles.copyright}>Last Updated: {songLyrics.updated_time}</Text>
        <Text style={styles.copyright}>{songLyrics.lyrics_copyright}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lyricsBlock: {
    justifyContent: 'center',
    margin: 15,
    padding: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  SongLyrics: {
    padding: 16,
    margin: 8,
    fontWeight: 'bold',
  },
  copyright: {
    padding: 16,
    margin: 8,
  },
});
export default SongLyricsBlock;