import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={{alignItems: 'center'}}>
       <Image
        style={styles.logo}
        source={{uri: 'https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1'}}
      />
      <Text style={styles.text}>
        Sign up to see <Text style={{color: '#ff3040'}}>photos</Text> and <Text style={{color: '#ff3040'}}>videos</Text> from your frends.
      </Text>
      <Pressable style={styles.button}><Text style={{color: 'white', fontSize: 16, fontWeight: '500', fontFamily: 'arial'}}>Get the Instagram app</Text></Pressable>
      <Text style={styles.links}><Text style={{color: '#0083f6', fontWeight: 600}}>Log In</Text> or <Text style={{color: '#0083f6', fontWeight: 600}}>Sign Up</Text></Text>
      <View style={styles.fromMeta}>
        <Text style={{color: 'gray', fontSize: 10}}>from</Text>
        <Image 
        style={styles.meta}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidalCyUxe1JfdYUSw189aw2erFFfIUqXPPYx-1akTBxzfiA1g'}}
        />
      </View>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
  },
  text: {
    marginTop: -30,
    width: 300,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'normal',
    marginBottom: 30,
    fontFamily: 'arial'
  },
  button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#0083f6',
    padding: 12,
    borderRadius: 6,
    
  },
  links: {
    fontFamily: 'arial',
    fontSize: 15,
    marginTop: 25,
  },
  fromMeta: {
    alignItems: 'center',
    marginTop: 90,
    marginBottom: 45
  },
  meta: {
   width: 70, 
   height: 25,
   resizeMode: 'contain',
  }
});
