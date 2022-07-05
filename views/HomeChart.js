import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { trackChartsURL, searchTrackURL } from '../components/api.js';
import { FaMusic, FaMicrophone } from 'react-icons/fa';
import configData from "../conf/config.json";

import SongBlock from '../components/SongBlock';

const HomeChart = ({ navigation }) => {

    const [songs, setSongs] = useState([]);

    const getChartingSongs = async () => {
        try {
            const url = trackChartsURL + configData.apiKey;
            const response = await fetch(url);
            const json = await response.json();
            const data = json.message.body.track_list;
            setSongs(data);
            //console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getChartingSongs();
    }, []);


    return (
        <View style={styles.screen}>

            <Text style={styles.h1}>Trending Now in Belgium</Text>

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
            <View style={styles.buttonContainer} >
                <Pressable style={styles.navigationBtn} onPress={() => navigation.navigate('Artists')}>
                    <Text style={styles.navigationText}>Search Artists</Text>
                </Pressable>
                <Pressable style={styles.navigationBtn} onPress={() => navigation.navigate('Songs')}>
                    <Text style={styles.navigationText}>Search Songs</Text>
                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

    screen: {
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginBottom: 5,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,

    },
    navigationBtn: {
        width: 170,
        height: 55,
        borderRadius: 8,
        backgroundColor: 'black',
        padding: 15,
        margin: 5,
    },
    navigationText: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: "center",
        justifyContent: "center"
    },
});

export default HomeChart;