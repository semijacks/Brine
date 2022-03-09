import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import CarouselImage1 from './assets/images/carousel_image_1.svg';
import HomepageArrow from './assets/images/homepage_arrow.svg';

export default function App() {
  let [fontsLoaded] = useFonts({
    Muller: require('./assets/fonts/Muller-Trial-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Make Payments With Cryptocurrency</Text>
      <CarouselImage1 style={styles.carouselImage} />
      <TouchableOpacity style={styles.homepageButton}>
        <HomepageArrow />
        <Text style={styles.homepageButtonText}>Continue</Text>
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 90,
  },
  headerText: {
    fontFamily: 'Muller',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 26.8,
    lineHeight: 33,
    letterSpacing: 0.4,
    textAlign: 'center',
    color: '#085017',
    maxWidth: 305,
  },
  carouselImage: {
    marginTop: 60,
    maxWidth: 224.48,
    marginBottom: 50,
  },
  homepageButton: {
    width: 333,
    height: 48,
    backgroundColor: '#0B8224',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homepageButtonText: {
    color: '#FDFFFD',
    marginLeft: 10,
    maxWidth: 68,
    fontFamily: 'Muller',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
  },
});
