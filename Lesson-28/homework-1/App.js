import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, setPermission] = useState(false)
  const [image, setImage] = useState(null)
  const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted')
    })();
  }, [])

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const takePicture = async () => {
      if(cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync()
        setImage(photo.uri)
      }
  }

  const pickImage = async () => {
     const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes : ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3]
     })

     if(!res.canceled){
      setImage(res.assets[0].uri)
     }
  }

  return (
    <View style={styles.container}>
      {permission ? (
        <Camera style={styles.camera} type={type} ref={cameraRef} >
        <View style={styles.buttonContainer}>
          <Pressable style={styles.images} onPress={pickImage}></Pressable>
          <Pressable style={styles.photoButton} onPress={takePicture}><Text style={{backgroundColor: 'white', height: 42, width: 42, borderRadius: '50%'}}></Text></Pressable>
          <Pressable style={styles.flipButton} onPress={toggleCameraType} ><Ionicons name="ios-sync" size={38} color="black" /></Pressable>
        </View>
      </Camera>
      ) : ( <Text>no access to camera</Text>)}
      {image && <Image source={{uri: image}} style={{flex: 1}}/>}
    </View>
  );
}

const styles = StyleSheet.create({ 
  container : {
    flex: 1,
  },
  camera: {
    height: '90%',
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    width: '100%',
    height: '15%',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flipButton: {
    width: 40,
    height: 40,
    backgroundColor: '#363636',
    alignItems: 'center',
    borderRadius: '50%'
  },
  photoButton: {
    height: 54,
    width: 54, 
    borderRadius: '50%', 
    borderColor: 'white', 
    borderWidth: 3, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  images: {
    height: 50,
    width: 50,
    backgroundColor: '#363636'
  }

 }); 