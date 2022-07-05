import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ArtistBlock = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectArtist(props.artistId)}>
      <View style={styles.artist}>
        <Text>{props.artist.artist_name}</Text>
        <Text>{props.artist.artist_rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  artist: {
    margin: 15,
    padding: 10,
    //borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 15,
    //borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
});
export default ArtistBlock;