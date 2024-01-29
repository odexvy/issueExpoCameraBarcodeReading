import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

export default function App() {
  const [barcode, setBarcode]=useState('')
  const [type, setType]=useState('')
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const handleBarCodeScanner = ({ data, type }:any) => {
    setBarcode(data)
    setType(type)
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back} onBarCodeScanned={handleBarCodeScanner} ratio='16:9'>
        <View style={styles.barCodeContainer}>
          <Text style={styles.text}>
            {`barcode : ${barcode}`}
          </Text>
          <Text style={styles.text}>
            {`type : ${type}`}
          </Text>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  barCodeContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff',
  },
});

