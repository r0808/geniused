import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { trackChartsURL, searchArtistURL } from '../components/api.js';
import configData from "../conf/config.json";

import ArtistBlock from '../components/ArtistBlock';

const SearchArtist = ({ navigation }) => {

    const [artists, setArtists] = useState([]);

    const getArtistsBySearch = async (enteredText) => {
        try {
            if (enteredText.length > 2) {
                const url = encodeURI(searchArtistURL + enteredText + "&page_size=15&page=1&s_artist_rating=desc&&apikey=" + configData.apiKey)
                const response = await fetch(url);
                const json = await response.json();
                const data = json.message.body.artist_list;
                setArtists(data);
                //console.log(url);
                //console.log(data);
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
                placeholder="search artists"
                style={styles.input}
                onChangeText={getArtistsBySearch}
            />

            <FlatList
                data={artists}
                keyExtractor={item => item.artist.artist_id}
                renderItem={({ item }) => (
                    <ArtistBlock
                        artist={item.artist}
                        artistId={item.artist.artist_id}
                        title={item.artist.artist_name}
                        onSelectArtist={(selectedId) => { navigation.navigate('Artist Details', { artistId: selectedId }) }}
                    />
                    //<Text>{item.track.track_name}</Text>
                )}
            />

            <Pressable style={styles.bottomButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Back to Trending</Text>
            </Pressable>
        </View>
    )
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

export default SearchArtist;