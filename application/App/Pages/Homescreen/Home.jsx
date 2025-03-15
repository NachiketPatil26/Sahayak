import React, { useEffect, useRef, useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [marker, setMarker] = useState(null);
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["10%", "50%", "90%"], []);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const initialRegion = {
    latitude: location?.coords?.latitude || 28.6139,
    longitude: location?.coords?.longitude || 77.2090,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleLongPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({ latitude, longitude });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sahayak</Text>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-circle-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation
        showsMyLocationButton
        onLongPress={handleLongPress}
      >
        {marker && (
          <Marker
            coordinate={marker}
            title="Pinned Location"
            description="You marked this location"
          />
        )}
      </MapView>

      <BottomSheet ref={sheetRef} index={0} snapPoints={snapPoints} enablePanDownToClose>
        <BottomSheetView style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>Welcome to Sahayak</Text>
          <Text style={styles.bottomSheetDescription}>
            Find help nearby or offer assistance to others in need.
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Get Started</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  bottomSheetContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a1a1a',
  },
  bottomSheetDescription: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  actionButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
