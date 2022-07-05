import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SongBlock = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectTrack(props.trackId)}>
      <View style={styles.songs}>
        <Text style={styles.blockTitle}>{props.track.track_name}</Text>
        <Text style={styles.blockSubtitle}>{props.track.artist_name}</Text>
        <View style={styles.ratingBlock} ><Text style={styles.rate} > {props.track.track_rating}</Text></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  rate: {
    color: 'gray',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontWeight: 'bold'
  },

  songs: {
    justifyContent: 'center',
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
  },
  blockTitle: {
    color: 'black',
    fontWeight: 'bold'
  },
  blockSubtitle: {
    color: 'gray',
  },

});
export default SongBlock;