import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable} from 'react-native';
import {getArtistURL, apiKey} from './api.js'

const ArtistDetailsBlock = props => {
  const [artistDetails, setArtistDetails] = useState({});

  const getArtistById = async () => {
    try {
      const url = encodeURI(getArtistURL + props.artistId + "&&apikey=6b9d1a81e74cc7ed377c14301f8483f4");
      const response = await fetch(url);
      const json = await response.json();
      const data = json.message.body.artist;
      setArtistDetails(data);
      console.log(url);
      console.log(data);
    }
      catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getArtistById();
  }, []);

  return (
    <ScrollView>
      <View style={styles.detailsContainer}>
        <Text style={styles.h1}>{artistDetails.artist_name}</Text>
        <View style={styles.aboutContainer}>
          <Text style={styles.copyright}>From: {artistDetails.artist_country}</Text>
          <Text style={styles.copyright}>{artistDetails.artist_rating}</Text>
        </View>
        <Pressable style={styles.bottomButton} onPress={ ()=>{ Linking.openURL(artistDetails.artist_twitter_url)}}>
          <Text style={styles.btnText}>{artistDetails.artist_name}'s Twitter</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  aboutContainer :{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  h1 :{
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },

  bottomButton: {
    width: 180,  
    height: 55,
    borderRadius: 8,
    backgroundColor: '#1DA1F2',
    padding: 15,
    margin: 5,
  },
  btnText: {
      fontSize: 16,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      alignSelf: "center",
      justifyContent: "center"
  },
});
export default ArtistDetailsBlock;