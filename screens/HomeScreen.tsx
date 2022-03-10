import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { RootStackParamList } from '../App';
import { WelcomeIllustration } from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  let [fontsLoaded] = useFonts({
    Muller: require('../assets/fonts/Muller-Trial-Regular.otf'),
    ModernAntiqua: require('../assets/fonts/ModernAntiqua_Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText} textBreakStrategy='simple'>
        Brine
      </Text>
      <WelcomeIllustration style={styles.illustration} />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('CreateAccount')}
      >
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
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
    color: '#085017',
    fontFamily: 'ModernAntiqua',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: -0.24,
    textTransform: 'uppercase',
  },
  illustration: {
    marginTop: 27,
    width: '100%',
    height: '100%',
    marginBottom: 52,
  },
  loginButton: {
    width: 333,
    height: 48,
    backgroundColor: '#0B8224',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FDFFFD',
    fontFamily: 'Muller',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
  },
  createAccountButton: {
    width: 333,
    height: 48,
    borderWidth: 1,
    borderColor: '#0B8224',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: '#0B8224',
    fontFamily: 'Muller',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
  },
});
