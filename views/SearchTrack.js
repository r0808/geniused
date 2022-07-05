import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { trackChartsURL, searchTrackURL } from '../components/api.js';
import configData from "../conf/config.json";

import SongBlock from '../components/SongBlock';

const SearchTrack = ({ navigation }) => {

    const [songs, setSongs] = useState([]);

    const getSongsBySearch = async (enteredText) => {
        try {
            if (enteredText.length > 2) {
                const url = encodeURI(searchTrackURL + enteredText + "&page_size=15&page=1&s_track_rating=desc&&apikey=" + configData.apiKey)
                const response = await fetch(url);
                const json = await response.json();
                const data = json.message.body.track_list;
                setSongs(data);
                //console.log(url);
            }
            /*if (enteredText.length <= 1) {
                getChartingSongs();
            }*/
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container} >
            <TextInput
                placeholder="search songs"
                style={styles.input}
                onChangeText={getSongsBySearch}
            />

            <FlatList
                data={songs}
                keyExtractor={item => item.track.commontrack_id}
                renderItem={({ item }) => (
                    <SongBlock
                        track={item.track}
                        trackId={item.track.commontrack_id}
                        title={item.track.track_name}
                        onSelectTrack={(selectedId) => { navigation.navigate('Lyrics', { trackId: selectedId }) }}
                    />
                    //<Text>{item.track.track_name}</Text>
                )}
            />

            <Pressable style={styles.bottomButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Back to Trending</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    input: {
        padding: 12,
        borderWidth: 3,
        borderColor: "black",
        fontWeight: "bold",
        alignSelf: "stretch",
        margin: 10,
        borderRadius: 10,
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

export default SearchTrack;