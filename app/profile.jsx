import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { markers } from './markers/markers'

const INICIAL_REGION = {
    latitude: -8.056650953248273,
    longitude: -34.89834937489086,
    latitudeDelta: 2,
    longitudeDelta: 2
};

const pins = () => {
    return markers.map((item, index) => {
        return (
            <Marker 
                key={index}
                coordinate={{latitude: item.LATITUDE, longitude: item.LONGITUDE}}
                title={item.NOME}
                description={item.BAIRRO}
            />
        )
    });
};

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                provider={MapView.PROVIDER_GOOGLE}
                initialRegion={INICIAL_REGION}
                showsUserLocation
            >
                {pins()}
            </MapView>
        </View>
    );
}