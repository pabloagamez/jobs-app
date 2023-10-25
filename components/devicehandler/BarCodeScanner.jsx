import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet  } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./barcodescanner.style";

const BarCodeScannerHandler = () => {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [hasScanned, setHasScanned] = useState(false);
    const [scannedText, setScannedText] = useState("Not yet Scanned");
  
    const askCameraPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status === "granted") {
        setHasPermission(true);
      } else {
        setHasPermission(false);
      }
    };
  
    const handleAfterScanned = ({ data, type }) => {
      setHasScanned(true);
      setScannedText(data);
    };
  
    useEffect(() => {
      askCameraPermission();
    }, []);
  
    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>Permission denied</Text>
          <Button title="Allow Camera" onPress={askCameraPermission} />
        </View>
      );
    }
    
    if (hasPermission === null) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>Requesting camera Permission</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.camContainer}>
        <BarCodeScanner
          onBarCodeScanned={hasScanned ? undefined : handleAfterScanned}
          style={[StyleSheet.absoluteFillObject, styles.camera]}
        />
        {hasScanned && (
          <Button title="Scan again" onPress={() => setHasScanned(false)} />
        )}
        <Text style={{ fontSize: 20, color: 'red' }}>{scannedText}</Text>
      </View>
    );
};

export default BarCodeScannerHandler;
