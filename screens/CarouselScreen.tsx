import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { CarouselImg1, HomepageArrow, CarouselImg2 } from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'Carousel'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Make Payments With Cryptocurrency</Text>
      <CarouselImg2 style={styles.carouselImage} />
      <TouchableOpacity
        style={styles.homepageButton}
        onPress={() => navigation.navigate('Home')}
      >
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
    paddingTop: 90,
    minHeight: '100%',
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
